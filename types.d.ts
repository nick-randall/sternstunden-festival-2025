type Artist = {
  id: number;
  index: number;
  name: string;
  description: string;
  imageUrl: string;
  events: ArtistEvent[];
};

type ArtistWithoutEvents = {
  id: number;
  index: number;
  code: string;
  name: string;
  description: string;
  imageUrl: string;
  attributes: {
    [key: string]: string | number | boolean;
  };
  artistUrl: string;
};

type MenuItem = "tickets" | "programm" | "info" | "kontakt" | "" | "closing";

type ArtistWithEvents = {
  artist: {
    id: number;
    index: number;
    name: string;
    description: string;
    imageUrl: string;
    artistUrl: string;
    code: string;
    attributes: null | {
      [key: string]: string | number | boolean;
    };
  };
  events: FestivalEvent[];
};

type ArtistWithEventsAndPlaceholderImage = {
  artist: {
    id: number;
    index: number;
    name: string;
    description: string;
    imageUrl: string;
    artistUrl: string;
    code: string;
    attributes: null | {
      [key: string]: string | number | boolean;
    };
    image: ImageWithPlaceholder;
  };
  events: FestivalEvent[];
};

type DayAndEvents = {
  stageEvents: StageWithEvents[];
  day: {
    id: number;
    name: string;
    startDateTime: string;
    endDateTime: string;
  };
};

type StageWithEvents = {
  stage: {
    id: number;
    name: string;
  };
  events: FestivalEventWithArtist[];
};

type FestivalEvent = {
  id: number;
 
  stage: {
    id: number;
    name: string;
  };
  startDateTime: string;
  endDateTime: string;
  attributes: {
    [key: string]: string | number | boolean;
  };
  day?: {
    id: number;
    name: string;
    startDateTime: string;
    endDateTime: string;
  };
};

type FestivalEventWithArtist = FestivalEvent & {
  artist: ArtistWithoutEvents;
}

type ImageWithPlaceholder = {
  src: string;
  placeholder?: string;
};
