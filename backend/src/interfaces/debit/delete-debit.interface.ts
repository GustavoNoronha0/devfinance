export interface DeleteDebitService {
  delete(id: string): Promise<true>;
}
