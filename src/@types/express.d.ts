/*
  Overriding Express typing
 */
declare namespace Express {
  export interface Request {
    user: any;
  }
}
