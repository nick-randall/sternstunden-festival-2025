interface Artist {
  id: string;
  index: number;
  name: string;
  description: string;
  imageUrl: string;
}

type MenuItem = "tickets" | "programm" | "info" | "kontakt" | "" | "closing";