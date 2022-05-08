export interface IKeyProvider<T> {
    getKey(payload: T): Promise<string>
    decodedKey(key: string): Promise<T>
}