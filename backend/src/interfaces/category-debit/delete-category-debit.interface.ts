export interface DeleteCategoryDebitService {
  delete(id: string): Promise<true>;
}
