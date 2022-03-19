export interface DeleteReceivementService {
  delete(id: string): Promise<true>;
}
