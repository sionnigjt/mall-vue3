// 全局type
declare global {
    type carousels = {
        carouselUrl: string,
        redirectUrl: string
      }
      type categoryListType = {
        name: string,
        imgUrl: string,
        categoryId: number
      }
      type GoodsType = {
        goodsId: number,
        goodsName: string,
        goodsIntro: string,
        goodsCoverImg: string,
        sellingPrice: number,
        tag: string
      }
      type HomeSateType = {
        swiperList: Array<carousels>,
        headerScroll: boolean,
        isLogin: boolean,
        categoryList: Array<categoryListType>,
        loading: boolean,
        newGoodses: Array<GoodsType>,
        hotGoodses: Array<GoodsType>
      }
      type User = {
        username: string;
        password: string;
      };
      type LoginUser = {
        loginName: string;
        passwordMd5: string;
      };
      type dataType = {
        carousels: any;
        hotGoodses: any;
        newGoodses: any;
        recommendGoodses: any;
      }
      
      interface MyResponseType {
        code: number;
        message: string;
        data: dataType;
      }
      interface ProductDetailType{
        goodsCarouselList:string,
        goodsCoverImg:string,
        goodsDetailContent:string,
        goodsId:number,
        goodsIntro:string,
        goodsName:string,
        originalPrice:number,
        sellingPrice:number,
        tag:string
      }
  }
  
  export {};