import { rest } from 'msw';
export const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/users',
    (req: any, res: any, ctx: any) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            name: 'ShinCode',
          },
          {
            name: 'Test',
          },
        ])
      );
    }
  ),
];
