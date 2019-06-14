package com.jingdong.common.jump;

import android.content.Context;
import android.content.res.AssetManager;
import android.net.Uri;
import android.os.Bundle;
import android.text.TextUtils;
import com.jd.framework.json.JDJSONArray;
import com.jd.framework.json.JDJSONObject;
import com.jingdong.common.BaseActivity;
import com.jingdong.common.entity.JumpEntity;
import com.jingdong.common.entity.ShareEntity;
import com.jingdong.common.entity.ShareInfo;
import com.jingdong.common.unification.i18n.UnI18NUtils;
import com.jingdong.common.utils.JsonParser;
import com.jingdong.jdsdk.network.toolbox.ExceptionReporter;
import com.jingdong.jdsdk.utils.JSONObjectProxy;
import com.jingdong.sdk.oklog.OKLog;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.reflect.Method;
import java.net.URLDecoder;
import java.util.Iterator;
import java.util.Set;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class JumpUtil
{
  public static final String JDPAY_OPEN_SCHEME = "jdpayopen";
  public static final String JDPAY_SCHEME = "jdpay";
  public static final String OPENAPP_SCHEME1 = "openapp.jdmobile";
  public static final String OPENAPP_SCHEME2 = "openjd";
  public static final String OPENAPP_SCHEME_THAI = "openjdthai";
  private static final String TAG = JumpUtil.class.getSimpleName();
  public static final String VALUES_DES_RANK_RECOMMEND_INNER = "rankrecommend";
  public static final String VALUES_DES_RANK_TOPIC = "rankTopic";
  public static final String VALUE_DES_2G_ALBUM_DETAIL = "worthbuy_newAlbum_detail";
  public static final String VALUE_DES_ABOUT = "aboutApp";
  public static final String VALUE_DES_AGGREGATE_PAGE = "aggregatePage";
  public static final String VALUE_DES_ALBUM_DETAIL = "album_detail";
  public static final String VALUE_DES_ALBUM_LIKE = "album_like";
  public static final String VALUE_DES_ALBUM_LIST = "album_list";
  public static final String VALUE_DES_ALBUM_SELECTED_LIST = "album_selected_inner_list";
  public static final String VALUE_DES_APPCENTER = "appcenter";
  public static final String VALUE_DES_APPCENTER1 = "native_appcenter";
  public static final String VALUE_DES_APPHOME = "HomePage";
  public static final String VALUE_DES_AR = "arCapture";
  public static final String VALUE_DES_ARBOOK = "arbook";
  public static final String VALUE_DES_ARTICLE_DETAIL = "article_detail";
  public static final String VALUE_DES_ARVR_PUBLIC_INTERFACE = "arvr_public_interface";
  public static final String VALUE_DES_AR_BUY = "arbuy";
  public static final String VALUE_DES_AR_MAKEUP = "armakeup";
  public static final String VALUE_DES_ASSISTANT_CHAT_BACKGROUND_SETTING = "chat_background_setting";
  public static final String VALUE_DES_BABEL = "babel";
  public static final String VALUE_DES_BARCODE_PURCHASE = "barcodePurchase";
  public static final String VALUE_DES_CANCEL_PROGRESS = "cancelProgress";
  public static final String VALUE_DES_CATEGORY = "category";
  public static final String VALUE_DES_CHONGZHI = "recharge";
  public static final String VALUE_DES_CHONGZHI1 = "chongzhi";
  public static final String VALUE_DES_COMMENT_DETAIL = "commentDetail";
  public static final String VALUE_DES_COMMENT_REPORT_DETAIL = "wareCommentReportDetail";
  public static final String VALUE_DES_COMMUNE = "commune";
  public static final String VALUE_DES_COUPON = "mycoupon";
  public static final String VALUE_DES_CPS_UNION = "union";
  public static final String VALUE_DES_DASHMAIN = "jdnow";
  public static final String VALUE_DES_DEFAULT_BROWSER = "OpenByDefaultBrowser";
  public static final String VALUE_DES_DISCOVERY_ANSWER_DETAIL = "discovery_answer_detail";
  public static final String VALUE_DES_ENJOYBUY = "enjoybuy";
  public static final String VALUE_DES_ENJOYBUY_BRAND = "enjoybuybrand";
  public static final String VALUE_DES_EVALUATE_CENTER = "commentCenter";
  public static final String VALUE_DES_EVALUATE_CENTER_COMMENT_AND_SHARE = "commentAndShare";
  public static final String VALUE_DES_EVALUATE_EDIT = "shareOrder";
  public static final String VALUE_DES_EVALUATION_OFFICER_PERSONAL_INFO = "evaluationOfficerPersonalInfo";
  public static final String VALUE_DES_EVALUATION_OFFICER_REGISTER = "evaluationOfficerRegister";
  public static final String VALUE_DES_FAXIAN_ALL_COMMENT = "finder_all_comment";
  public static final String VALUE_DES_FAXIAN_ARTICLE = "faxian_article";
  public static final String VALUE_DES_FAXIAN_AUTHOR = "faxian_author";
  public static final String VALUE_DES_FAXIAN_COMMENT_DETAIL = "finder_comment_detail";
  public static final String VALUE_DES_FAXIAN_COMMENT_INPUT = "faxian_comment_input";
  public static final String VALUE_DES_FEEDBACK = "feedback";
  public static final String VALUE_DES_FEETMEASUEREMENT = "feetmeasuerement";
  public static final String VALUE_DES_FETCH_COUPON = "fetchcoupon";
  public static final String VALUE_DES_FILLORDER = "orderInfoView";
  public static final String VALUE_DES_FIND_LIVE_LIST = "FindLivePlayList";
  public static final String VALUE_DES_FIND_LIVE_PRE = "FindLivePreDetail";
  public static final String VALUE_DES_FOLLOW_CHANNEL = "followChannel";
  public static final String VALUE_DES_FSMUTISHOP = "FSMutiShop";
  public static final String VALUE_DES_GAME_CHONGZHI = "gamechongzhi";
  public static final String VALUE_DES_GENERIC_CHANNEL = "genericChannel";
  public static final String VALUE_DES_GENE_RECOM = "geneRecom";
  public static final String VALUE_DES_GOODS_FAXIAN4EVENT = "faxian";
  public static final String VALUE_DES_GOODS_RECOMMEND = "goodsRecommend";
  public static final String VALUE_DES_GOODS_RECOMMEND1 = "recommend";
  public static final String VALUE_DES_GO_CART = "goCart";
  public static final String VALUE_DES_GROUP_CHAT_GROUP = "dongdong_group_chat";
  public static final String VALUE_DES_GROUP_MIAOSHA_NEWPRODUCT = "group_seckill_newproduct";
  public static final String VALUE_DES_GROUP_SHOPPING = "groupShopping";
  public static final String VALUE_DES_GUANGGUANG1 = "native_guangguang";
  public static final String VALUE_DES_GUANGGUANG2 = "guangguangnew";
  public static final String VALUE_DES_GUANZHU = "guanzhu";
  public static final String VALUE_DES_H5_GAME = "h5Game";
  public static final String VALUE_DES_HISTORY_LIST = "historyList";
  public static final String VALUE_DES_HOME_GLOBAL = "HomePage_Global";
  public static final String VALUE_DES_IDCARDLIST = "idcardlist";
  public static final String VALUE_DES_IM = "jd_native_im";
  public static final String VALUE_DES_IM_O1 = "im";
  public static final String VALUE_DES_INDEX_GOODSHOP = "indexGoodShop";
  public static final String VALUE_DES_INNER_BRAND_CATEGORY = "seckillbrand";
  public static final String VALUE_DES_INNER_NEW_BRAND = "seckillnewbrand";
  public static final String VALUE_DES_INNOVATION_LAB = "innovationLab";
  public static final String VALUE_DES_INSIGHTAR = "insightar";
  public static final String VALUE_DES_INTELLIGENT_ASSISTANT = "IntelligentAssistant";
  public static final String VALUE_DES_INTELLIGENT_ASSISTANT_CHAT_TIMBRE = "intelligent_assistant_chat_timbre";
  public static final String VALUE_DES_INTELLIGENT_ASSISTANT_MALL = "intelligent_assistant_mall";
  public static final String VALUE_DES_INTELLIGENT_ASSISTANT_NICKNAME_MODIFICATION = "chat_modify_username";
  public static final String VALUE_DES_INTELLIGENT_ASSISTANT_SETTING = "intelligent_assistant_setting";
  public static final String VALUE_DES_INTELLIGENT_ASSISTANT_SKILL_INTRODUCTION = "intelligent_assistant_skill_introduction";
  public static final String VALUE_DES_INTELLIGENT_ASSISTANT_VOICE_REPORT_CONTROL = "intelligent_assistant_voice_report_control";
  public static final String VALUE_DES_INVENTORY = "inventory";
  public static final String VALUE_DES_INVENTORY_DETAIL = "inventoryDetail";
  public static final String VALUE_DES_INVENTORY_TAG = "inventory_tag";
  public static final String VALUE_DES_JDALLYARDACTIVITY = "djxy_allgarden";
  public static final String VALUE_DES_JDAUTH = "jdAuth";
  public static final String VALUE_DES_JDBRANDACTIVITY = "djxy_brand";
  public static final String VALUE_DES_JDBUYPACK2ACTIVITY = "packDetail_v200";
  public static final String VALUE_DES_JDCUSTOMCHANNEL_MAIN = "jddjxy";
  public static final String VALUE_DES_JDLOGIN = "jdLogin";
  public static final String VALUE_DES_JDPAY_CODE = "jdpaymentcode";
  public static final String VALUE_DES_JDREACT_COMMON = "jdreactcommon";
  public static final String VALUE_DES_JDREMINDER = "JDReminder";
  public static final String VALUE_DES_JD_TO_MOBIKE = "mobikeMView";
  public static final String VALUE_DES_JIMI = "jd_native_jimi";
  public static final String VALUE_DES_JSHOP_BRAND_LIST = "jshopBrand";
  public static final String VALUE_DES_JSHOP_DYNAMIC_DETAIL = "jshopDynamicDetail";
  public static final String VALUE_DES_JSHOP_GUESS_WORD = "jshopGuessWord";
  public static final String VALUE_DES_JSHOP_MEMBER = "jshopMember";
  public static final String VALUE_DES_JSHOP_PRODUCT_LIST = "jshopProductList";
  public static final String VALUE_DES_JSHOP_SIGN = "jshopSign";
  public static final String VALUE_DES_JSHOP_SIGN_RANK = "signRank";
  public static final String VALUE_DES_LIFE_CIRCLE = "shenghuoquan";
  public static final String VALUE_DES_LIFE_TRAVEL = "lifetravel";
  public static final String VALUE_DES_LIVE_ROOM = "LivePlayerRoom";
  public static final String VALUE_DES_LIVE_VERIFICATION = "liveVerification";
  public static final String VALUE_DES_LOOK_SIMILAR = "lookSimilar";
  public static final String VALUE_DES_LOTTERY = "lottery";
  public static final String VALUE_DES_LOTTERY1 = "caipiao";
  public static final String VALUE_DES_MATCH_DETAIL = "outfit_detail";
  public static final String VALUE_DES_MATRIXAR = "matrixar";
  public static final String VALUE_DES_MESSAGE_BOX = "myMessageBox";
  public static final String VALUE_DES_MESSAGE_M = "myMessageM";
  public static final String VALUE_DES_MESSAGE_SEC = "myMessageAccount";
  public static final String VALUE_DES_MESSAGE_SET = "myMessageSet";
  public static final String VALUE_DES_MESSAGE_SET_RN = "myMessageSetRN";
  public static final String VALUE_DES_MESSAGE_SHOW = "myMessageShow";
  public static final String VALUE_DES_MIAOSHA_BANNER = "seckillBannerGoods";
  public static final String VALUE_DES_MIAOSHA_BRAND = "brandinner";
  public static final String VALUE_DES_MIAOSHA_LIANGFAN = "liangfan";
  public static final String VALUE_DES_MIAOSHA_LIANGFAN_ACTIVITY = "miaosha_liangfan";
  public static final String VALUE_DES_MIAOSHA_MYCONCERN = "myRemind";
  public static final String VALUE_DES_MIAOSHA_NEWPRODUCT = "seckill_newproduct";
  public static final String VALUE_DES_MIAOSHA_SEARCH_RESULT = "seckill_search_result";
  public static final String VALUE_DES_MORE = "more";
  public static final String VALUE_DES_MORE_SETTING = "moreSetting";
  public static final String VALUE_DES_MOVIE = "Movie";
  public static final String VALUE_DES_MOVIE1 = "dianyingpiao";
  public static final String VALUE_DES_MYCOLLECT = "mycollect";
  public static final String VALUE_DES_MYCOLLECT1 = "Mguanzhu";
  public static final String VALUE_DES_MYCOLLECT2 = "jshopList";
  public static final String VALUE_DES_MYJD = "myJd";
  public static final String VALUE_DES_MYSTREET = "mystreet";
  public static final String VALUE_DES_MY_BANKCARD = "myBankcard";
  public static final String VALUE_DES_MY_DNA = "myDNA";
  public static final String VALUE_DES_MY_GIFTCARD = "myGiftCard";
  public static final String VALUE_DES_MY_WALLET = "myWallet";
  public static final String VALUE_DES_MY_WALLET_PLATFORM = "myPlatformWallet";
  public static final String VALUE_DES_M_GLOBAL = "m_global";
  public static final String VALUE_DES_NEW_CATEGORY = "newCategory";
  public static final String VALUE_DES_NEW_GOODSHOP = "newgoodshop";
  public static final String VALUE_DES_NEW_RECHARGE = "newrecharge";
  public static final String VALUE_DES_NEW_THEMESTREET = "newthemestreet";
  public static final String VALUE_DES_OFTEN_BUY = "oftenBuy";
  public static final String VALUE_DES_ORDERDETAIL = "orderDetail";
  public static final String VALUE_DES_ORDER_DETAIL_WEAR = "orderDetail_wear";
  public static final String VALUE_DES_ORDER_INSTALL = "orderInstall";
  public static final String VALUE_DES_ORDER_TRACK = "orderTrack";
  public static final String VALUE_DES_PERSONAL_FONT_SETTING = "personal_font_setting";
  public static final String VALUE_DES_PERSONAL_MYBACK_AND_EXCHANGE = "personal_myback_and_exchange";
  public static final String VALUE_DES_PERSONAL_SEC_ACTIVITY = "userinfoeditpage";
  public static final String VALUE_DES_PHONE_SALE = "phoneSale";
  public static final String VALUE_DES_PHONE_SALE1 = "mobile-only";
  public static final String VALUE_DES_PHOTOBUY = "photobuy";
  public static final String VALUE_DES_PHOTOBUY1 = "native_photobuy";
  public static final String VALUE_DES_POP_IM = "pop_native_im";
  public static final String VALUE_DES_PREVIEW_LIVE = "LivePreviewList";
  public static final String VALUE_DES_PRIVACY_POLICY = "privacypolicy";
  public static final String VALUE_DES_PRODUCT = "product";
  public static final String VALUE_DES_PRODUCT_THREED = "threedproduct";
  public static final String VALUE_DES_PROMOTION_JUMP = "promotionJump";
  public static final String VALUE_DES_PROMOTION_NEW = "promotionNew";
  public static final String VALUE_DES_QA_LIST = "qa_list";
  public static final String VALUE_DES_QQ_CHONGZHI = "QQchongzhi";
  public static final String VALUE_DES_QUICK_PASS = "quickpass";
  public static final String VALUE_DES_RANKING_PAGE = "RankingMain";
  public static final String VALUE_DES_RANKING_PAGE1 = "goodranking";
  public static final String VALUE_DES_RANKLIST = "ranklist";
  public static final String VALUE_DES_RECODER = "recoder_activity";
  public static final String VALUE_DES_RECOMMEND_SCENE_DETAIL = "RecommendSceneLabelDetail";
  public static final String VALUE_DES_RECOMMEND_SIMILAR = "recommend_Similar";
  public static final String VALUE_DES_SCAN = "scan";
  public static final String VALUE_DES_SCAN1 = "native_scan";
  public static final String VALUE_DES_SCAN2 = "saoasao";
  public static final String VALUE_DES_SCAN_LOGIN = "scanLogin";
  public static final String VALUE_DES_SEARCH = "search";
  public static final String VALUE_DES_SECKILL_LIVE_LIST = "SecKillLivePlayList";
  public static final String VALUE_DES_SECKILL_LIVE_PRE = "SecKillLivePreDetail";
  public static final String VALUE_DES_SHAKE1 = "native_shake";
  public static final String VALUE_DES_SHAREORDER_TEXT_EDIT = "shareOrderTextEdit";
  public static final String VALUE_DES_SHARE_ORDER_COMMENT_BIG_PHOTO = "shareOrderCommentBigPhoto";
  public static final String VALUE_DES_SH_ACTIVITY_VIDEO = "SH_Activity_Video";
  public static final String VALUE_DES_SMALLVIDEO = "LiveSmallVideo";
  public static final String VALUE_DES_SMART_DEVICE = "smartdevice";
  public static final String VALUE_DES_STOREREND = "storetrend";
  public static final String VALUE_DES_STOREREND1 = "native_storetrend";
  public static final String VALUE_DES_STORY = "story";
  public static final String VALUE_DES_STORY1 = "native_story";
  public static final String VALUE_DES_TOKEN = "token";
  public static final String VALUE_DES_TOPIC_TAG_LIST = "tag_list";
  public static final String VALUE_DES_TRY_CLOTHES = "tryClothes";
  public static final String VALUE_DES_TRY_CLOTHES_3D = "tryClothes3D";
  public static final String VALUE_DES_UNIFYDETAIL = "unifieddetail";
  public static final String VALUE_DES_USER_PAGE_HOME = "userPageHome";
  public static final String VALUE_DES_VANGOPH_COLLECTION_DETAIL = "pMyCollectionDetail";
  public static final String VALUE_DES_VANGOPH_DETAIL = "pPinDetail";
  public static final String VALUE_DES_VANGOPH_MAIN = "pInterestSet";
  public static final String VALUE_DES_VIDEOLIFE = "videolife";
  public static final String VALUE_DES_VIDEO_BUY = "videoBuy";
  public static final String VALUE_DES_VIDEO_IMMERSION = "VideoImmersion";
  public static final String VALUE_DES_VIDEO_RANK = "VideoRank";
  public static final String VALUE_DES_VIRTUAL_BUSINESS = "virtualbusiness";
  public static final String VALUE_DES_VOICEINPUT = "jdvoiceinput";
  public static final String VALUE_DES_WAITING_GOODS = "waitingforGoods";
  public static final String VALUE_DES_WEB_BZ = "webBz";
  public static final String VALUE_DES_WEB_LANDPAGE = "webLandPage";
  public static final String VALUE_DES_WJ = "nfc_wj";
  public static final String VALUE_DES_WL_DEVICE_DETAILS = "wl_device_details";
  public static final String VALUE_DES_WL_HANDLE_QRCODE = "wl_handler_qrcode";
  public static final String VALUE_DES_WL_WAITADD_LIST = "wl_waitadd_list";
  public static final String VALUE_DES_WORTHBUY_2G_INVENTORY_DETAIL = "worthbuy_2GInventory_detail";
  public static final String VALUE_DES_WORTHBUY_ALBUM = "worthbuy_album";
  public static final String VALUE_DES_WORTHBUY_AUTHOR = "worthbuy_author";
  public static final String VALUE_DES_WORTHBUY_DETAIL = "worthbuy_detail";
  public static final String VALUE_DES_WORTHBUY_INVENTORY_DETAIL = "worthbuy_inventory_detail";
  public static final String VALUE_DES_WORTHBUY_LIKE = "worthbuy_like";
  public static final String VALUE_DES_WORTHBUY_LIST = "worthbuy_list";
  public static final String VALUE_DES_WORTHBUY_NEW_PRODUCT = "worthbuyNewProductDetail";
  public static final String VALUE_DES_WORTHBUY_TAG = "worthbuy_tag";
  public static final String VALUE_DES_WORTH_BUY = "worthBuy";
  public static final String VALUE_DES_WORTH_BUY1 = "goodchoice";
  public static final String VALUE_DES_WU_LIU_CHA_XUN = "wuliuchaxun";
  public static final String VALUE_DES_WU_LIU_CHA_XUN1 = "Mwuliuchaxun";
  public static final String VALUE_DES_WU_LIU_CHA_XUN2 = "logistics";
  public static final String VALUE_DES_YIYUANQIANGBAO = "yiyuanqiangbao";
  public static final String VALUE_JUMP = "jump";
  public static final String VAULE_DES_ACTIVITY = "activity";
  public static final String VAULE_DES_AIREXORDER = "exTravelOrder";
  public static final String VAULE_DES_AIRINORDER = "inTravelOrder";
  public static final String VAULE_DES_AIRLINE = "airTicket";
  public static final String VAULE_DES_AIRLINE1 = "jipiao";
  public static final String VAULE_DES_AIRLINE_ORDER = "airTicketOrder";
  public static final String VAULE_DES_AIRLIST = "airList";
  public static final String VAULE_DES_CART = "cart";
  public static final String VAULE_DES_CARTB = "cartB";
  public static final String VAULE_DES_COUPON_CENTER = "couponCenter";
  public static final String VAULE_DES_COUPON_CENTER1 = "couponcenter";
  public static final String VAULE_DES_DISCOVERY = "Discovery";
  public static final String VAULE_DES_DM = "DM";
  public static final String VAULE_DES_EXPRESSNEWS = "expressNews";
  public static final String VAULE_DES_FLOW_ORDERDETAIL = "flowOrderDetail";
  public static final String VAULE_DES_GET_COUPON = "getCoupon";
  public static final String VAULE_DES_HOME_ICONS = "homeIcons";
  public static final String VAULE_DES_JDGAME = "jdgame";
  public static final String VAULE_DES_JDTHIRDLOGIN = "ThirdPartyLogin";
  public static final String VAULE_DES_JSHOP = "jshopMain";
  public static final String VAULE_DES_JSHOP_ACTIVITY = "jshopActivity";
  public static final String VAULE_DES_M = "m";
  public static final String VAULE_DES_MEME_DISCSEARCH = "DiscSearch";
  public static final String VAULE_DES_ORDER_LIST = "orderlist";
  public static final String VAULE_DES_ORDER_TRACE = "ordertrace";
  public static final String VAULE_DES_PRODUCT_DETAIL = "productDetail";
  public static final String VAULE_DES_PRODUCT_DETAIL1 = "skudetail";
  public static final String VAULE_DES_PRODUCT_LIST = "productList";
  public static final String VAULE_DES_PROMOTION = "promotion";
  public static final String VAULE_DES_QQANDGAME_ORDERDETAIL = "qqAndGameOrderDetail";
  public static final String VAULE_DES_REACTNATIVE_PAYSUCCESS = "paySuccess";
  public static final String VAULE_DES_REACTNATIVE_VERSION = "jdreactversion";
  public static final String VAULE_DES_RECHARGE_ORDERDETAIL = "rechargeOrderDetail";
  public static final String VAULE_DES_SECK_KILL = "seckill";
  public static final String VAULE_DES_SECK_KILL1 = "miaosha";
  public static final String VAULE_DES_SHARE = "share";
  public static final String VAULE_DES_TEXT_CONTAINER = "textContainer";
  public static final String VAULE_DES_WENDA_QUESTION = "discovery_question";
  public static final String VAULE_DES_XIAOBING = "getXB";
  public static final String VAULE_DES_XIAOBING1 = "native_littlebing";
  public static final String VAULE_DES_XIAOBING2 = "xiaobing";
  public static boolean isPcStream = false;
  private static JSONObject mDesJsonObj;

  public static void execJump(Context paramContext, JumpEntity paramJumpEntity, int paramInt)
  {
    if ((paramJumpEntity == null) || (paramContext == null));
    String str1;
    String str2;
    ShareEntity localShareEntity;
    do
    {
      return;
      str1 = paramJumpEntity.des;
      str2 = paramJumpEntity.params;
      localShareEntity = paramJumpEntity.getShareInfo();
    }
    while (TextUtils.isEmpty(str1));
    if (str2 == null)
      str2 = "";
    JSONObjectProxy localJSONObjectProxy = JsonParser.parseParamsJsonFromString(str2);
    Bundle localBundle = getBundleFromJson(localJSONObjectProxy);
    if (str1.equals("orderInfoView"))
      localBundle.putString("json", localJSONObjectProxy.toString());
    if ((str1.equals("productDetail")) || (str1.equals("skudetail")))
      localBundle.putString("sourceValue", paramJumpEntity.getSrv());
    if (str1.equals("promotionNew"))
      localBundle.putString("sourceValue", paramJumpEntity.getSrv());
    if (str1.equals("promotionJump"))
      localBundle.putString("sourceValue", paramJumpEntity.getSrv());
    if (str1.equals("faxian_article"))
      localBundle.putString("testId", paramJumpEntity.getSrv());
    if ((str1.equals("inventory")) || (str1.equals("worthbuy_list")) || (str1.equals("album_list")) || (str1.equals("DiscSearch")) || (str1.equals("expressNews")) || (str1.equals("discovery_question")))
      localBundle.putString("params", paramJumpEntity.params);
    if ((localShareEntity != null) && (localShareEntity.url != null));
    for (int i = 1; ; i = 0)
    {
      if (i != 0)
      {
        ShareInfo localShareInfo = new ShareInfo();
        localShareInfo.setUrl(localShareEntity.url);
        localShareInfo.setIconUrl(localShareEntity.avatar);
        localShareInfo.setTitle(localShareEntity.title);
        localShareInfo.setSummary(localShareEntity.content);
        localBundle.putParcelable("shareInfo", localShareInfo);
        localBundle.putString("isShare", "1");
        localBundle.putBoolean("isNeedShare", true);
      }
      localBundle.putString("jumpDes", str1);
      localBundle.putInt("jumpFrom", paramInt);
      OKLog.d(TAG, "JumpUtil.execJump():" + str1 + "--->" + str2);
      execJumpByDes(str1, paramContext, localBundle);
      break;
    }
  }

  public static void execJumpByDes(String paramString, Context paramContext, Bundle paramBundle)
  {
    execJumpByDes(paramString, paramContext, paramBundle, null);
  }

  public static void execJumpByDes(String paramString, Context paramContext, Bundle paramBundle, JumpCallbackListener paramJumpCallbackListener)
  {
    if (paramContext == null);
    while (true)
    {
      return;
      if ((mDesJsonObj == null) || (mDesJsonObj.length() <= 0))
        loadDesData(paramContext);
      if ((mDesJsonObj == null) || (TextUtils.isEmpty(paramString)))
      {
        String str1;
        if (OKLog.D)
        {
          str1 = TAG;
          if (paramString != null)
            break label77;
        }
        label77: for (String str2 = "des: null"; ; str2 = "des: " + paramString)
        {
          OKLog.d(str1, str2);
          if (paramJumpCallbackListener == null)
            break;
          paramJumpCallbackListener.onError();
          break;
        }
      }
      if (paramBundle == null)
        paramBundle = new Bundle();
      String str3 = paramBundle.getString("token");
      String str4 = paramBundle.getString("loginType");
      if ((!TextUtils.isEmpty(str3)) && (!TextUtils.isEmpty(str4)))
      {
        isPcStream = true;
        new PcStreamUtil(paramContext).accessPCStream(paramString, paramBundle);
      }
      else
      {
        isPcStream = false;
        toTargetDes(paramString, paramContext, paramBundle, paramJumpCallbackListener);
      }
    }
  }

  public static void finishInterfaceActivity(Context paramContext)
  {
    if ((paramContext != null) && ((paramContext instanceof BaseActivity)))
    {
      BaseActivity localBaseActivity = (BaseActivity)paramContext;
      String str = localBaseActivity.getClass().getSimpleName();
      if ((!TextUtils.isEmpty(str)) && (str.contains("InterfaceActivity")))
        localBaseActivity.finish();
    }
  }

  public static Bundle getBundleFromJDJson(JDJSONObject paramJDJSONObject)
  {
    Bundle localBundle1 = new Bundle();
    Bundle localBundle2;
    if (paramJDJSONObject == null)
      localBundle2 = localBundle1;
    while (true)
    {
      return localBundle2;
      Set localSet = paramJDJSONObject.keySet();
      if (localSet == null)
      {
        localBundle2 = localBundle1;
      }
      else
      {
        Iterator localIterator = localSet.iterator();
        while (localIterator.hasNext())
        {
          String str = (String)localIterator.next();
          Object localObject = paramJDJSONObject.get(str);
          if (localObject != null)
            if ((localObject instanceof String))
              localBundle1.putString(str, (String)localObject);
            else if ((localObject instanceof Integer))
              localBundle1.putInt(str, ((Integer)localObject).intValue());
            else if ((localObject instanceof Boolean))
              localBundle1.putBoolean(str, ((Boolean)localObject).booleanValue());
            else if ((localObject instanceof Long))
              localBundle1.putLong(str, ((Long)localObject).longValue());
            else if ((localObject instanceof JDJSONArray))
              localBundle1.putString(str, localObject.toString());
            else if ((localObject instanceof JDJSONObject))
              localBundle1.putString(str, localObject.toString());
            else if (OKLog.D)
              OKLog.d(TAG, " getBundleFromJson ---> object : " + localObject);
        }
        localBundle2 = localBundle1;
      }
    }
  }

  public static Bundle getBundleFromJson(JSONObjectProxy paramJSONObjectProxy)
  {
    Bundle localBundle1 = new Bundle();
    Bundle localBundle2;
    if (paramJSONObjectProxy == null)
      localBundle2 = localBundle1;
    while (true)
    {
      return localBundle2;
      Iterator localIterator = paramJSONObjectProxy.keys();
      if (localIterator == null)
      {
        localBundle2 = localBundle1;
      }
      else
      {
        while (localIterator.hasNext())
        {
          Object localObject1 = localIterator.next();
          if ((localObject1 != null) && ((localObject1 instanceof String)))
          {
            String str = (String)localObject1;
            Object localObject2;
            try
            {
              Object localObject3 = paramJSONObjectProxy.get(str);
              localObject2 = localObject3;
              if (localObject2 == null)
                continue;
              if ((localObject2 instanceof String))
                localBundle1.putString(str, (String)localObject2);
            }
            catch (JSONException localJSONException)
            {
              while (true)
              {
                boolean bool = OKLog.E;
                localObject2 = null;
                if (bool)
                {
                  OKLog.e(TAG, localJSONException);
                  localObject2 = null;
                }
              }
              if ((localObject2 instanceof Integer))
              {
                localBundle1.putInt(str, ((Integer)localObject2).intValue());
                continue;
              }
              if ((localObject2 instanceof Boolean))
              {
                localBundle1.putBoolean(str, ((Boolean)localObject2).booleanValue());
                continue;
              }
              if ((localObject2 instanceof Long))
              {
                localBundle1.putLong(str, ((Long)localObject2).longValue());
                continue;
              }
              if ((localObject2 instanceof JSONArray))
              {
                localBundle1.putString(str, localObject2.toString());
                continue;
              }
              if ((localObject2 instanceof JSONObject))
                localBundle1.putString(str, localObject2.toString());
            }
            if (OKLog.D)
              OKLog.d(TAG, " getBundleFromJson ---> object : " + localObject2);
          }
        }
        localBundle2 = localBundle1;
      }
    }
  }

  public static String getDesFromModuleId(int paramInt)
  {
    String str;
    switch (paramInt)
    {
    default:
      str = "HomePage";
    case 1:
    case 216:
    }
    while (true)
    {
      return str;
      str = "HomePage";
      continue;
      str = "jdAuth";
    }
  }

  public static boolean isJdPayOpenScheme(String paramString)
  {
    if (TextUtils.isEmpty(paramString));
    for (boolean bool = false; ; bool = paramString.toLowerCase().equals("jdpayopen"))
      return bool;
  }

  public static boolean isJdPayScheme(String paramString)
  {
    if (TextUtils.isEmpty(paramString));
    for (boolean bool = false; ; bool = paramString.toLowerCase().equals("jdpay"))
      return bool;
  }

  public static boolean isOpenAppScheme(String paramString)
  {
    boolean bool1 = TextUtils.isEmpty(paramString);
    boolean bool2 = false;
    if (bool1);
    while (true)
    {
      return bool2;
      try
      {
        if (UnI18NUtils.isThApp())
        {
          boolean bool4 = paramString.toLowerCase().startsWith("openjdthai");
          bool2 = bool4;
          continue;
        }
      }
      catch (Exception localException)
      {
        localException = localException;
        localException.printStackTrace();
        if (!paramString.toLowerCase().startsWith("openapp.jdmobile"))
        {
          boolean bool3 = paramString.toLowerCase().startsWith("openjd");
          bool2 = false;
          if (!bool3)
            continue;
        }
        bool2 = true;
      }
      finally
      {
      }
    }
  }

  public static void loadDesData(Context paramContext)
  {
    if (paramContext == null);
    while (true)
    {
      return;
      while (true)
      {
        try
        {
          long l1 = System.currentTimeMillis();
          BufferedReader localBufferedReader = new BufferedReader(new InputStreamReader(paramContext.getAssets().open("DesJumpClassMap.json")));
          String str1 = "";
          String str2 = localBufferedReader.readLine();
          if (str2 != null)
          {
            str1 = str1 + str2;
            continue;
          }
          long l2 = System.currentTimeMillis();
          localBufferedReader.close();
          mDesJsonObj = new JSONObject(str1);
          String str3 = TAG;
          if ("object :" + mDesJsonObj != null)
            break label232;
          str4 = "null";
          OKLog.d(str3, str4);
          if ((mDesJsonObj == null) || (mDesJsonObj.length() <= 0))
            break label243;
          OKLog.d(TAG, "get desMap data success,costs time:" + (l2 - l1));
        }
        catch (Exception localException)
        {
          OKLog.e(TAG, "DesJumpUtil loadDesData error:" + localException.getMessage());
          OKLog.e(TAG, localException);
          mDesJsonObj = null;
        }
        break;
        label232: String str4 = mDesJsonObj.toString();
      }
      label243: OKLog.d(TAG, "can't load DesJumpClassMap");
    }
  }

  public static JDJSONObject string2JDJsonObject(String paramString, Uri paramUri)
  {
    Object localObject2;
    try
    {
      localObject1 = JsonParser.parseParamsJDJsonFromString(paramString);
      if ((localObject1 == null) || (((JDJSONObject)localObject1).size() < 1))
      {
        String str1 = paramUri.toString();
        if (str1.indexOf("params=") < 0)
        {
          localObject2 = null;
        }
        else
        {
          String str2 = str1.substring(7 + str1.indexOf("params="), str1.length());
          if ((str2.startsWith("{%22")) || (str2.startsWith("%7B%22")))
            str2 = URLDecoder.decode(str2, "utf-8");
          JDJSONObject localJDJSONObject = JsonParser.parseParamsJDJsonFromString(str2);
          localObject1 = localJDJSONObject;
        }
      }
      else
      {
        localObject2 = localObject1;
      }
    }
    catch (Exception localException)
    {
      while (true)
      {
        if (OKLog.E)
          OKLog.e(TAG, localException);
        Object localObject1 = null;
      }
    }
    return localObject2;
  }

  public static JSONObject string2JsonObject(String paramString, Uri paramUri)
  {
    Object localObject2;
    try
    {
      localObject1 = JsonParser.parseParamsJsonFromString(paramString);
      if ((localObject1 == null) || (((JSONObject)localObject1).length() < 1))
      {
        String str1 = paramUri.toString();
        if (str1.indexOf("params=") < 0)
        {
          localObject2 = null;
        }
        else
        {
          String str2 = str1.substring(7 + str1.indexOf("params="), str1.length());
          if ((str2.startsWith("{%22")) || (str2.startsWith("%7B%22")))
            str2 = URLDecoder.decode(str2, "utf-8");
          JSONObjectProxy localJSONObjectProxy = JsonParser.parseParamsJsonFromString(str2);
          localObject1 = localJSONObjectProxy;
        }
      }
      else
      {
        localObject2 = localObject1;
      }
    }
    catch (Exception localException)
    {
      while (true)
      {
        if (OKLog.E)
          OKLog.e(TAG, localException);
        Object localObject1 = null;
      }
    }
    return localObject2;
  }

  public static void toTargetDes(String paramString, Context paramContext, Bundle paramBundle)
  {
    toTargetDes(paramString, paramContext, paramBundle, null);
  }

  public static void toTargetDes(String paramString, Context paramContext, Bundle paramBundle, JumpCallbackListener paramJumpCallbackListener)
  {
    boolean bool = paramBundle.getBoolean("isFromMInside");
    while (true)
    {
      try
      {
        str3 = mDesJsonObj.optString(paramString);
        if (TextUtils.isEmpty(str3))
        {
          if (OKLog.D)
          {
            String str6 = TAG;
            if ("class: " + null != str3)
              break label444;
            str7 = "null";
            OKLog.d(str6, str7);
          }
          if (paramJumpCallbackListener != null)
          {
            paramJumpCallbackListener.onError();
            String str4 = paramBundle.getString("url", "");
            String str5 = "des不存在\tdes: " + paramString + "  not found!";
            StringBuilder localStringBuilder2 = new StringBuilder().append("otherinfo: listener:");
            if (paramJumpCallbackListener != null)
              break label452;
            localObject2 = "null";
            ExceptionReporter.reportWebViewCommonError("openappDesInvalid", str4, str5, localObject2 + "\tisFromMInside: " + bool + " \t des: " + paramString);
            break label443;
          }
          if (!bool)
          {
            execJumpByDes("HomePage", paramContext, new Bundle());
            continue;
          }
        }
      }
      catch (Exception localException)
      {
        String str3;
        OKLog.e(TAG, localException);
        if (paramJumpCallbackListener != null)
        {
          paramJumpCallbackListener.onError();
          String str1 = paramBundle.getString("url", "");
          String str2 = "跳转des发生异常\tdes: " + paramString + "  exception!";
          StringBuilder localStringBuilder1 = new StringBuilder().append("otherinfo: listener:");
          if (paramJumpCallbackListener == null)
            paramJumpCallbackListener = "null";
          ExceptionReporter.reportWebViewCommonError("openappDesException", str1, str2, paramJumpCallbackListener + "\tisFromMInside: " + bool + " \t des: " + paramString);
          break label443;
          finishInterfaceActivity(paramContext);
          continue;
          Class localClass = Class.forName(str3);
          Object localObject1 = localClass.newInstance();
          localClass.getMethod("handleDesJumpRequest", new Class[] { Context.class, Bundle.class }).invoke(localObject1, new Object[] { paramContext, paramBundle });
          if (paramJumpCallbackListener == null)
            break label443;
          paramJumpCallbackListener.onSuccess();
          break label443;
        }
        if (!bool)
        {
          execJumpByDes("HomePage", paramContext, new Bundle());
          continue;
        }
        finishInterfaceActivity(paramContext);
        continue;
      }
      label443: return;
      label444: String str7 = "";
      continue;
      label452: Object localObject2 = paramJumpCallbackListener;
    }
  }

  @Deprecated
  public static void toTargetPage(Context paramContext, int paramInt, Bundle paramBundle)
  {
    if (paramBundle == null)
      paramBundle = new Bundle();
    execJumpByDes(getDesFromModuleId(paramInt), paramContext, paramBundle);
  }
}