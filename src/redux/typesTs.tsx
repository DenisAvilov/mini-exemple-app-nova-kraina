export type TSdefaultProfile = {
    firstName: string
    lastName: string
    email: string
    password: string
    getInspired: boolean
    isOpen: boolean
    status: string
    teflon: {
     vodafon?: null | string
     kievstar?: null | string
     life?: null | string
    }
    contact: {
      facebook: null | string
      viber: null | string
      telegram: null | string
      tiktok: null | string
      tviter: null | string
    }
    placeOfResidence: {
      country: null | string
      city: null | string
      village: null | string
    }
    photo: TSphotoAvatar
  }

type TSphotoAvatar = {
  avatar?: null | string
  avatarBgLarge?: null | string
  avatarBgMini?: null | string
  }

interface PhotoAvatar<T>{
  avatar: T | null | string;
  avatarBgLarge: T | null | string;
  avatarBgMini: T | null | string;
  }
