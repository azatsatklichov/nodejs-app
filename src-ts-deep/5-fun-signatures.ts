interface Book {
  id: number;
  title: string;
  author: string;
  pages?: number;
  markDamaged: (reason: string) => void;
}
