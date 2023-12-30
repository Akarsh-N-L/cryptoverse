export interface IcurrCardHome {
  image: any;
  stat: string;
  value: string;
}

export interface IcoinCard {
  icon: any;
  name: string;
  price: string;
  marketCap: number;
  dailyChange: number;
}
export interface IcoinListItem {
  icon: any;
  name: string;
  price: string;
  marketCap: number;
  dailyChange: number;
  sparkLine: any[];
}

export interface IcryptoCurrencies {
  coins: number;
  cards: boolean;
}

export interface InewsCard {
  image: string;
  heading: string;
  desc: string;
}

export interface Inews {
  size: number;
}
