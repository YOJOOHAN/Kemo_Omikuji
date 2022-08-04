'use strict';

{
  const btn =document.getElementById('btn');
  const fade = document.querySelector(".fade");
  const K_cutin =document.querySelector(".K_cutin");
  const T_cutin =document.querySelector(".T_cutin");
  const red=document.querySelector(".red");
  const green=document.querySelector(".green");
  const soto=document.querySelector(".soto");
  const stamp=document.querySelector(".stamp");
  const smoke=document.querySelector(".smoke")
  const pink=document.querySelector(".pink");
  const images = [
    'img/result00.png',
    'img/result01.png',
    'img/result02.png',
    'img/result03.png',
   ];
  const item1=document.querySelector(".item1");
  const item2=document.querySelector(".item2");

  const items =[
    'ケモショタの脱ぎたてパンツ','ショタドラの蒸れ蒸れスパッツ','オスケモの染みつきフンドシ','ショタドラの産みたて卵','鳥ケモのふかふか肉布団',
    'ドラゴンおちんぽディルド','獣人用・肛門開発キット','感度3000倍、射精封じの淫紋','牛ショタの濃厚ミルク','ショタドラのスリット用ピンクローター',
    'TF用、犬の首輪','TF用、竜人の培養槽','TF用、サイボーグ化手術台','TF用、アヌビスの棺','TF用、狐のお面',
    '出前ピザ','回転寿司','すき家の牛丼','博多とんこつラーメン','窯出しとろけるプリン',
    'ひろーいお風呂','ケモショタの肉球マッサージ','アヘ顔ダブルピース','ほんのりエッチなVRChatアバター','作業通話',
    '神絵師の腕','RPGツクール','サブウェイのサンドイッチ','リングフィット アドベンチャー','部屋を掃除しよう、まずはそれからだ…',
    '媚薬たっぷりTFフード','フォロワーのお腹','新しいパソコン','発情ケモショタの荒い吐息','ちょっとお高い家電製品',
    'カフェインたっぷり飲料','カラオケ・フリータイム','同族化セックスTF本','ドランゴン、アンバースTFシチュ','ケモショタ奴隷オークション',
    '新しいヘッドセットorイヤホン','フルーティーなお酒','狸ショタの特大ふぐり','アーリオ・オーリオ・ペペロンチーノ','ケモショタ・エロトラップ・ダンジョン',
    'ケモショタのおしり','オスケモのムチムチ雄っぱい','ケモショタ交尾ショー','Pinterestで資料探し','十分な睡眠',
    // ここまで50個
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
    '','','','','',
    //ここまで100個
  ];
  const back =document.querySelector(".back")






// ボタンを押したときの処理
btn.addEventListener('click',()=>{

  fade.style.visibility='visible';
  fade.classList.add("is-active");

  // フェードアウトして0.5秒後に狐のカットイン
  setTimeout(() => {K_cutin.classList.add("is-active");
  }, 500);
  // 狐のカットイン開始後、1.5秒後に狸のカットイン
  setTimeout(() => {T_cutin.classList.add("is-active");
  }, 1500);
  // 狐のカットイン開始後、2.5秒後に炎のフェードイン
  setTimeout(() => {red.classList.add("is-active1")
  green.classList.add("is-active1");
  }, 2500);
  // 狐のカットイン開始後、4.5秒後に炎が回転
  setTimeout(() => {soto.classList.add("is-active")
  red.classList.add("is-active2")
  green.classList.add("is-active2");
  }, 4500);
  // 狐のカットイン開始後、7.5秒後にフラッシュライト
  setTimeout(() =>{fade.classList.add("is-active2")
  }, 7500);
  // 狐のカットイン開始後、8.5秒後にスタンプアニメ
  setTimeout(() => {stamp.classList.add("is-active")
  fade.classList.remove("is-active2");
  }, 8500);
  // 狐のカットイン開始後、9.3.秒後に煙とおみくじ結果
  setTimeout(() => {smoke.classList.add("is-active")
       // 大吉、中吉、小吉、末吉をランダムに選んで画像を変更
    const n = Math.floor(Math.random() * 4);
    pink.src = images[n];

  pink.classList.add("is-active");
  }, 9200);
  
  //狐のカットイン開始後、10.3秒後にpinkが上に移動
  setTimeout(() => {pink.classList.add("is-active2")
  }, 10300);
  //狐のカットイン開始後、11.3秒後にitem1を表示
  setTimeout(() => {item1.classList.add("is-active")
  }, 11300);
  //狐のカットイン開始後、12.3秒後にitem2を表示
  // item2の内容を抽選
  const i = Math.floor(Math.random() * 50);
    item2.textContent = items[i];
  setTimeout(() => {item2.classList.add("is-active")
  }, 12300);
  // 狐のカットインの13.3秒後にbackを表示
  setTimeout(() => {back.classList.add("is-active")
  }, 13300);

  });
  // ここまでクリック処理

const smoke2= document.querySelector(".smoke2");

back.addEventListener("click",()=>{
  fade.classList.add("is-active3");
  setTimeout(() => {fade.classList.remove("is-active3")
  }, 700);
  const n = Math.floor(Math.random() * 4);
  pink.src = images[n];
  const i = Math.floor(Math.random() * 50);
    item2.textContent = items[i];

})
 


}

