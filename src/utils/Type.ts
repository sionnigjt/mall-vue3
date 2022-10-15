// 全局type
declare global {
  type carousels = {
    carouselUrl: string;
    redirectUrl: string;
  };
  type categoryListType = {
    name: string;
    imgUrl: string;
    categoryId: number;
  };
  type GoodsType = {
    goodsId: number;
    goodsName: string;
    goodsIntro: string;
    goodsCoverImg: string;
    sellingPrice: number;
    tag: string;
  };
  type HomeSateType = {
    swiperList: Array<carousels>;
    headerScroll: boolean;
    isLogin: boolean;
    categoryList: Array<categoryListType>;
    loading: boolean;
    newGoodses: Array<GoodsType>;
    hotGoodses: Array<GoodsType>;
    recommendGoodses:Array<GoodsType>;
  };
  type User = {
    username: string;
    password: string;
  };
  type LoginUser = {
    loginName: string;
    passwordMd5: string;
  };
  type RegisterUser = {
    loginName: string;
    password: string;
  };
  type dataType = {
    carousels: Array<swiperListData>;
    hotGoodses: Array<GoodsType> ;
    newGoodses: Array<GoodsType>;
    recommendGoodses: any;
  };
  type swiperListData= {
    carouselUrl: string;
    redirectUrl: string;
}
  interface MyResponseType<T> {
    resultCode: number;
    message: string;
    data: T;
  }
  interface ProductDetailType {
    goodsCarouselList: string;
    goodsCoverImg: string;
    goodsDetailContent: string;
    goodsId: number;
    goodsIntro: string;
    goodsName: string;
    originalPrice: number;
    sellingPrice: number;
    tag: string;
  }
  interface CartListType {
    cartItemId: number;
    goodsCount: number;
    goodsCoverImg: string;
    goodsId: number;
    goodsName: string;
    sellingPrice: number;
  }
  interface addCartType {
    goodsCount: number;
    goodsId: number;
  }
  interface modifyCartType{
    cartItemId: any;
    goodsCount: any;
}
}

export {};
