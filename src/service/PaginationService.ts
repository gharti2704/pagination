export class PaginationService {
  public async getPagination(
    page: number,
    limit: number,
    model: any
  ): Promise<any> {
    const items = await model
      .find()
      .skip((page - 1) * limit)
      .limit(limit);
    return items;
  }
}
