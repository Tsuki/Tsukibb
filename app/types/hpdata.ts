export interface Anime {
    name: string;
    path: string;
}

export interface Day {
    label: string;
    animes: Anime[];
}

export interface Calendar {
    title: string;
    days: Day[];
}

export interface Hpdata {
    calendar: Calendar;
    featured?: any;
}
