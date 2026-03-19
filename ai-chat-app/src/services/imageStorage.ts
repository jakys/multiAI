/**
 * 图片存储服务 - 使用 IndexedDB 持久化保存图片
 *
 * 优势：
 * - 无存储大小限制（相比 localStorage 的 5-10MB）
 * - 自动持久化，刷新页面后依然存在
 * - 无需用户授权
 * - 支持 Blob 存储二进制图片数据
 */

interface StoredImage {
  id: string
  name: string
  blob: Blob
  mimeType: string
  size: number
  createdAt: string
}

class ImageStorageService {
  private db: IDBDatabase | null = null
  private DB_NAME = 'AIChatImagesDB'
  private DB_VERSION = 1
  private STORE_NAME = 'images'
  private urlCache = new Map<string, string>() // 缓存 Object URLs

  /**
   * 初始化数据库
   */
  async init(): Promise<void> {
    if (this.db) return

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, this.DB_VERSION)

      request.onerror = () => {
        console.error('Failed to open IndexedDB:', request.error)
        reject(request.error)
      }

      request.onsuccess = () => {
        this.db = request.result
        console.log('ImageStorage: IndexedDB initialized')
        resolve()
      }

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          const store = db.createObjectStore(this.STORE_NAME, { keyPath: 'id' })
          store.createIndex('createdAt', 'createdAt', { unique: false })
          console.log('ImageStorage: Created object store')
        }
      }
    })
  }

  /**
   * 保存图片到 IndexedDB
   */
  async saveImage(id: string, name: string, blob: Blob, mimeType: string): Promise<void> {
    await this.init()

    const storedImage: StoredImage = {
      id,
      name,
      blob,
      mimeType,
      size: blob.size,
      createdAt: new Date().toISOString()
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.STORE_NAME], 'readwrite')
      const store = transaction.objectStore(this.STORE_NAME)
      const request = store.put(storedImage)

      request.onsuccess = () => {
        console.log(`ImageStorage: Saved image ${id}`)
        resolve()
      }

      request.onerror = () => {
        console.error('ImageStorage: Failed to save image:', request.error)
        reject(request.error)
      }
    })
  }

  /**
   * 保存 base64 图片
   */
  async saveBase64Image(id: string, name: string, base64: string, mimeType: string): Promise<void> {
    // 将 base64 转换为 Blob
    const byteCharacters = atob(base64)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    const blob = new Blob([byteArray], { type: mimeType })

    await this.saveImage(id, name, blob, mimeType)
  }

  /**
   * 获取图片的 Object URL
   */
  async getImageUrl(id: string): Promise<string | null> {
    await this.init()

    // 检查缓存
    if (this.urlCache.has(id)) {
      return this.urlCache.get(id)!
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.STORE_NAME], 'readonly')
      const store = transaction.objectStore(this.STORE_NAME)
      const request = store.get(id)

      request.onsuccess = () => {
        const result = request.result as StoredImage | undefined
        if (!result) {
          resolve(null)
          return
        }

        // 创建 Object URL
        const url = URL.createObjectURL(result.blob)
        this.urlCache.set(id, url)
        resolve(url)
      }

      request.onerror = () => {
        console.error('ImageStorage: Failed to get image:', request.error)
        reject(request.error)
      }
    })
  }

  /**
   * 获取图片 Blob
   */
  async getImageBlob(id: string): Promise<Blob | null> {
    await this.init()

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.STORE_NAME], 'readonly')
      const store = transaction.objectStore(this.STORE_NAME)
      const request = store.get(id)

      request.onsuccess = () => {
        const result = request.result as StoredImage | undefined
        resolve(result?.blob || null)
      }

      request.onerror = () => {
        console.error('ImageStorage: Failed to get blob:', request.error)
        reject(request.error)
      }
    })
  }

  /**
   * 删除图片
   */
  async deleteImage(id: string): Promise<void> {
    await this.init()

    // 清除缓存的 URL
    const cachedUrl = this.urlCache.get(id)
    if (cachedUrl) {
      URL.revokeObjectURL(cachedUrl)
      this.urlCache.delete(id)
    }

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.STORE_NAME], 'readwrite')
      const store = transaction.objectStore(this.STORE_NAME)
      const request = store.delete(id)

      request.onsuccess = () => {
        console.log(`ImageStorage: Deleted image ${id}`)
        resolve()
      }

      request.onerror = () => {
        console.error('ImageStorage: Failed to delete image:', request.error)
        reject(request.error)
      }
    })
  }

  /**
   * 批量删除图片
   */
  async deleteImages(ids: string[]): Promise<void> {
    await Promise.all(ids.map(id => this.deleteImage(id)))
  }

  /**
   * 清空所有图片
   */
  async clearAll(): Promise<void> {
    await this.init()

    // 清除所有缓存的 URL
    this.urlCache.forEach((url) => URL.revokeObjectURL(url))
    this.urlCache.clear()

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.STORE_NAME], 'readwrite')
      const store = transaction.objectStore(this.STORE_NAME)
      const request = store.clear()

      request.onsuccess = () => {
        console.log('ImageStorage: Cleared all images')
        resolve()
      }

      request.onerror = () => {
        console.error('ImageStorage: Failed to clear images:', request.error)
        reject(request.error)
      }
    })
  }

  /**
   * 获取所有图片的元数据
   */
  async getAllImages(): Promise<StoredImage[]> {
    await this.init()

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.STORE_NAME], 'readonly')
      const store = transaction.objectStore(this.STORE_NAME)
      const request = store.getAll()

      request.onsuccess = () => {
        resolve(request.result as StoredImage[])
      }

      request.onerror = () => {
        console.error('ImageStorage: Failed to get all images:', request.error)
        reject(request.error)
      }
    })
  }

  /**
   * 获取存储使用情况
   */
  async getStorageUsage(): Promise<{ count: number; totalSize: number }> {
    const images = await this.getAllImages()
    return {
      count: images.length,
      totalSize: images.reduce((sum, img) => sum + img.size, 0)
    }
  }

  /**
   * 释放所有缓存的 Object URLs
   */
  revokeAllUrls(): void {
    this.urlCache.forEach((url) => URL.revokeObjectURL(url))
    this.urlCache.clear()
  }
}

// 导出单例实例
export const imageStorage = new ImageStorageService()

// 便捷函数
export async function saveImage(id: string, name: string, blob: Blob, mimeType: string): Promise<void> {
  return imageStorage.saveImage(id, name, blob, mimeType)
}

export async function saveBase64Image(id: string, name: string, base64: string, mimeType: string): Promise<void> {
  return imageStorage.saveBase64Image(id, name, base64, mimeType)
}

export async function getImageUrl(id: string): Promise<string | null> {
  return imageStorage.getImageUrl(id)
}

export async function deleteImage(id: string): Promise<void> {
  return imageStorage.deleteImage(id)
}

export async function deleteImages(ids: string[]): Promise<void> {
  return imageStorage.deleteImages(ids)
}

export async function clearAllImages(): Promise<void> {
  return imageStorage.clearAll()
}

export async function getStorageUsage(): Promise<{ count: number; totalSize: number }> {
  return imageStorage.getStorageUsage()
}

export async function getImageBlob(id: string): Promise<Blob | null> {
  return imageStorage.getImageBlob(id)
}
