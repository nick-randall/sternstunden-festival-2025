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
  attributes: {
    [key: string]: string | number | boolean;
  };
  artistUrl: string;
}

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
    attributes: {
      [key: string]: string | number | boolean;}
  };
  eventStartDateTime: string;
  events: FestivalEvent[];
}

type DayAndEvents= {
    stageEvents: StageWithEvents[];
    day: {
      id: 1;
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
  attributes: {
    [key: string]: string | number | boolean; 
  };

};


type ImageWithPlaceholder = {
  src: string;
  placeholder: string;
}