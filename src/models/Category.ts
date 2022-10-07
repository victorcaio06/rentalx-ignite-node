import { v4 as uuidv4 } from 'uuid';

export class Category {
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

  id?: string;
  name: string;
  description: string;
  created_at: Date;
}
