type Artist  = {
  id: string;
  index: number;
  name: string;
  description: string;
  imageUrl: string;
  events: ArtistEvent[];
}

type ArtistWithoutEvents  = {
  id: string;
  index: number;
  code: string;
  name: string;
  description: string;
  imageUrl: string;
}

type MenuItem = "tickets" | "programm" | "info" | "kontakt" | "" | "closing";


type ArtistEvent = {
  id: number;
  startDateTime: string;
  endDateTime: string;
  stage: {
    id: number;
    name: string;
  };
  day: {
    id: number;
    name: string;
    startDateTime: string;
    endDateTime: string;
  };
}
type ArtistWithEvents = {
  artist: {
    id: number;
    index: number;
    name: string;
    description: string;
    imageUrl: string;
    artistUrl: string;
    code: string;
  };
  eventStartDateTime: string;
  events: ArtistEvent[];
}


type StageWithEvents = {
    stage: {
    id: number;
    name: string;
  };
  events: FestivalEvent[];
}

type FestivalEvent = {
  id: number;
  artist: ArtistWithOutEvents;
  stage: {
    id: number;
    name: string;
  };
  startDateTime: string;
  endDateTime: string;
};


