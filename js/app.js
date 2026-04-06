const FLOWS = {
  "app": {
    "title": "<img class=\"flow-icon\" src=\"images/logo/mona_app.jpg\"> 모바일 앱 — 비밀번호 찾기",
    "steps": [
      {
        "t": "모나용평 앱 실행 후 오른쪽 위 메뉴 선택",
        "img": "images/app/app_1.jpg",
        "alt": "앱홈",
        "hl": {
          "top": 3,
          "left": 84.1,
          "w": 15.9,
          "h": 7.3,
          "label": "메뉴"
        }
      },
      {
        "t": "메뉴에서 \"로그인\" 선택",
        "img": "images/app/app_2.jpg",
        "alt": "메뉴",
        "hl": {
          "top": 10.6,
          "left": 11.7,
          "w": 31.5,
          "h": 7.7,
          "label": "로그인"
        }
      },
      {
        "t": "로그인 화면에서 \"비밀번호 찾기\" 선택",
        "img": "images/app/app_3.jpg",
        "alt": "로그인",
        "hl": {
          "top": 56,
          "left": 32.9,
          "w": 31.5,
          "h": 6.4,
          "label": "비밀번호 찾기"
        }
      },
      {
        "t": "아이디 입력 후 \"휴대폰 인증\" 누르기",
        "sub": "아이디 입력 → 검은 동그라미 버튼",
        "img": "images/app/app_4.jpg",
        "alt": "비밀번호찾기",
        "hl": {
          "top": 40,
          "left": 5.3,
          "w": 88.6,
          "h": 27,
          "label": "휴대폰 인증"
        }
      },
      {
        "t": "본인 통신사 선택",
        "sub": "SKT · KT · LG U+ 중 해당 항목",
        "img": "images/app/app_5.jpg",
        "alt": "통신사",
        "hl": {
          "top": 32.5,
          "left": 0.4,
          "w": 99.6,
          "h": 31.6,
          "label": "통신사 선택"
        },
        "tip": {
          "lbl": "알뜰폰 이용자",
          "html": "아래 행 <strong>SKT/KT/LG U+ 알뜰폰</strong> 선택"
        }
      },
      {
        "t": "\"문자(SMS) 인증\" 선택",
        "img": "images/app/app_6.jpg",
        "alt": "인증방법",
        "hl": {
          "top": 46.2,
          "left": 0.9,
          "w": 99.1,
          "h": 14.3,
          "label": "문자 인증"
        }
      },
      {
        "t": "동의 체크 후 빨간 \"다음\" 선택",
        "img": "images/app/app_7.jpg",
        "alt": "다음",
        "hl": {
          "top": 62.3,
          "left": 1.7,
          "w": 96,
          "h": 15.2,
          "label": "다음"
        }
      },
      {
        "t": "이름·생년월일·휴대폰·보안문자 입력 후 빨간 \"확인\" 선택",
        "img": "images/app/app_8.jpg",
        "alt": "정보입력",
        "hl": {
          "top": 30.6,
          "left": 1.8,
          "w": 96,
          "h": 59.3,
          "label": "확인"
        },
        "tip": {
          "lbl": "입력 순서",
          "html": "① 이름 → ② 생년월일 6자리 → ③ 주민번호 앞 1자리 → ④ 휴대폰번호 입력 → ⑤ 보안문자 → ⑥ 확인"
        }
      },
      {
        "t": "화면 상단 알림 확인",
        "sub": "문자함에서 NICE아이디 인증번호 확인",
        "img": "images/app/app_9.jpg",
        "alt": "인증대기",
        "hl": {
          "top": 3.7,
          "left": 3.8,
          "w": 92.6,
          "h": 6.6,
          "label": "인증번호 확인"
        }
      },
      {
        "t": "문자로 온 인증번호 6자리 확인",
        "img": "images/app/app_10.jpg",
        "alt": "SMS",
        "hl": {
          "top": 74.5,
          "left": 3.3,
          "w": 69.9,
          "h": 11.6,
          "label": "인증번호 6자리"
        },
        "tip": {
          "lbl": "유의사항",
          "html": "인증번호는 <strong>3분 안에</strong> 입력해야 합니다!"
        }
      },
      {
        "t": "인증번호 입력 후 \"확인\" 선택",
        "img": "images/app/app_11.jpg",
        "alt": "인증번호입력",
        "hl": {
          "top": 32.8,
          "left": 0.9,
          "w": 97.5,
          "h": 13.2,
          "label": "확인"
        }
      },
      {
        "t": "새 비밀번호 입력 후 \"비밀번호 변경\" 선택",
        "img": "images/app/app_12.jpg",
        "alt": "비밀번호변경",
        "hl": {
          "top": 25.7,
          "left": 3.8,
          "w": 91.1,
          "h": 40.7,
          "label": "비밀번호 변경"
        },
        "tip": {
          "lbl": "비밀번호 규칙",
          "html": "영문 + 숫자 + 특수문자, <strong>8~13자리</strong> · 예: Yong2024!"
        }
      }
    ],
    "complete": {
      "title": "비밀번호 변경 완료",
      "desc": "새 비밀번호로 로그인하실 수 있습니다."
    }
  },
  "mweb": {
    "title": "모바일 웹 — 비밀번호 찾기",
    "steps": [
      {
        "t": "스마트폰 브라우저에서 yongpyong.co.kr 접속 후 메뉴(☰)",
        "img": "images/mweb/mweb_1.jpg",
        "alt": "모바일웹홈",
        "hl": {
          "top": 9.4,
          "left": 0,
          "w": 11.2,
          "h": 5.7,
          "label": "☰ 클릭!"
        }
      },
      {
        "t": "메뉴에서 \"로그인\" 선택",
        "img": "images/mweb/mweb_2.jpg",
        "alt": "메뉴",
        "hl": {
          "top": 9.5,
          "left": 42.7,
          "w": 19.7,
          "h": 5.7,
          "label": "로그인 클릭!"
        }
      },
      {
        "t": "로그인 화면에서 \"비밀번호찾기\" 클릭",
        "img": "images/mweb/mweb_3.jpg",
        "alt": "로그인",
        "hl": {
          "top": 47.8,
          "left": 34.8,
          "w": 30,
          "h": 12.5,
          "label": "비밀번호찾기 클릭!"
        }
      },
      {
        "t": "아이디 입력 후 \"휴대폰인증\" 선택",
        "sub": "아이디 입력 → 왼쪽 \"휴대폰인증으로 비밀번호 찾기\" 버튼",
        "img": "images/mweb/mweb_4.jpg",
        "alt": "비밀번호찾기",
        "hl": {
          "top": 26.3,
          "left": 0.3,
          "w": 98.5,
          "h": 23.9,
          "label": "휴대폰 인증"
        }
      },
      {
        "t": "본인 통신사 선택",
        "img": "images/mweb/mweb_5.jpg",
        "alt": "통신사",
        "hl": {
          "top": 33.8,
          "left": 2.3,
          "w": 93.6,
          "h": 30.2,
          "label": "통신사 선택"
        },
        "tip": {
          "lbl": "알뜰폰 이용자",
          "html": "아래 행 <strong>SKT/KT/LG U+ 알뜰폰</strong> 선택"
        }
      },
      {
        "t": "\"문자(SMS) 인증\" 선택",
        "img": "images/mweb/mweb_6.jpg",
        "alt": "인증방법",
        "hl": {
          "top": 46.4,
          "left": 1.8,
          "w": 96,
          "h": 14.3,
          "label": "문자 인증"
        }
      },
      {
        "t": "동의 체크 후 스크롤 내려 \"다음\" 선택",
        "img": "images/mweb/mweb_7.jpg",
        "alt": "동의",
        "hl": {
          "top": 62.2,
          "left": 0,
          "w": 97.9,
          "h": 17.7,
          "label": "동의 항목"
        },
        "tip": {
          "lbl": "다음 버튼이 안 보여요?",
          "html": "동의 체크 후 화면을 <strong>아래로 스크롤</strong>하면 빨간 \"다음\" 버튼이 나타납니다."
        }
      },
      {
        "t": "이름·생년월일·휴대폰·보안문자 입력 후 빨간 \"확인\" 선택",
        "img": "images/mweb/mweb_8.jpg",
        "alt": "정보입력",
        "hl": {
          "top": 27.5,
          "left": 1.3,
          "w": 97.5,
          "h": 62.7,
          "label": "확인"
        },
        "tip": {
          "lbl": "입력 순서",
          "html": "① 이름 → ② 생년월일 6자리 → ③ 주민번호 앞 1자리 → ④ 휴대폰번호 입력 → ⑤ 보안문자 → ⑥ 확인"
        }
      },
      {
        "t": "상단 알림에서 인증번호 확인",
        "img": "images/mweb/mweb_9.jpg",
        "alt": "인증대기",
        "hl": {
          "top": 3.5,
          "left": 0.9,
          "w": 98,
          "h": 6.4,
          "label": "인증번호 확인"
        }
      },
      {
        "t": "문자함에서 인증번호 6자리 확인",
        "img": "images/mweb/mweb_10.jpg",
        "alt": "SMS",
        "hl": {
          "top": 74.5,
          "left": 3.3,
          "w": 68.4,
          "h": 11.6,
          "label": "인증번호 6자리"
        },
        "tip": {
          "lbl": "유의사항",
          "html": "인증번호는 <strong>3분 안에</strong> 입력해야 합니다!"
        }
      },
      {
        "t": "인증번호 입력 후 \"확인\" 선택",
        "img": "images/mweb/mweb_11.jpg",
        "alt": "인증번호입력",
        "hl": {
          "top": 33.2,
          "left": 2.3,
          "w": 95.5,
          "h": 12,
          "label": "확인"
        }
      },
      {
        "t": "새 비밀번호 입력 후 \"비밀번호 변경\" 클릭",
        "img": "images/mweb/mweb_12.jpg",
        "alt": "비밀번호변경",
        "hl": {
          "top": 17,
          "left": 0.9,
          "w": 98.5,
          "h": 35.2,
          "label": "비밀번호 변경"
        },
        "tip": {
          "lbl": "비밀번호 규칙",
          "html": "영문 + 숫자 + 특수문자, <strong>8~13자리</strong> · 예: Yong2024!"
        }
      }
    ],
    "complete": {
      "title": "비밀번호 변경 완료",
      "desc": "새 비밀번호로 로그인하실 수 있습니다."
    }
  },
  "web": {
    "title": "홈페이지(PC) — 비밀번호 찾기",
    "steps": [
      {
        "t": "로그인 화면에서 \"비밀번호 찾기\" 선택",
        "sub": "www.yongpyong.co.kr → 로그인",
        "img": "images/web/web_1.jpg",
        "alt": "로그인",
        "full": true,
        "hl": {
          "top": 36.9,
          "left": 61.2,
          "w": 4.5,
          "h": 3.7,
          "label": "비밀번호 찾기"
        }
      },
      {
        "t": "아이디 입력 후 \"휴대폰인증\" 선택",
        "img": "images/web/web_2.jpg",
        "alt": "비밀번호찾기",
        "full": true,
        "hl": {
          "top": 30.3,
          "left": 32.9,
          "w": 17.3,
          "h": 32.6,
          "label": "휴대폰 인증"
        }
      },
      {
        "t": "팝업창 — \"휴대폰 본인 확인\" 선택",
        "img": "images/web/web_3.jpg",
        "alt": "본인확인",
        "hl": {
          "top": 18,
          "left": 2.6,
          "w": 94.1,
          "h": 8.6,
          "label": "휴대폰 본인 확인"
        }
      },
      {
        "t": "본인 통신사 선택",
        "img": "images/web/web_4.jpg",
        "alt": "통신사",
        "hl": {
          "top": 32.4,
          "left": 1.6,
          "w": 94.5,
          "h": 34.8,
          "label": "통신사 선택"
        }
      },
      {
        "t": "\"문자(SMS) 인증\" 선택",
        "img": "images/web/web_5.jpg",
        "alt": "SMS인증",
        "hl": {
          "top": 58,
          "left": 4.9,
          "w": 89.6,
          "h": 12.3,
          "label": "문자 인증"
        }
      },
      {
        "t": "동의 체크 후 빨간 \"다음\" 선택",
        "img": "images/web/web_6.jpg",
        "alt": "다음",
        "hl": {
          "top": 72.7,
          "left": 1.6,
          "w": 94.5,
          "h": 16.4,
          "label": "다음"
        }
      },
      {
        "t": "이름·생년월일·휴대폰·보안문자 입력 후 빨간 \"확인\" 선택",
        "img": "images/web/web_7.jpg",
        "alt": "정보입력",
        "hl": {
          "top": 31.5,
          "left": 2.3,
          "w": 93.8,
          "h": 57.3,
          "label": "확인"
        },
        "tip": {
          "lbl": "입력 순서",
          "html": "① 이름 → ② 생년월일 6자리 → ③ 주민번호 앞 1자리 → ④ 휴대폰번호 입력 → ⑤ 보안문자 → ⑥ 확인"
        }
      },
      {
        "t": "핸드폰 문자함에서 인증번호 확인",
        "img": "images/web/web_8.jpg",
        "alt": "SMS",
        "hl": {
          "top": 74.5,
          "left": 2.3,
          "w": 70.4,
          "h": 12.3,
          "label": "인증번호 6자리"
        },
        "tip": {
          "lbl": "유의사항",
          "html": "인증번호는 <strong>3분 안에</strong> 입력해야 합니다!"
        }
      },
      {
        "t": "인증번호 입력 후 \"확인\" 선택",
        "img": "images/web/web_9.jpg",
        "alt": "인증번호입력",
        "hl": {
          "top": 32.8,
          "left": 4.1,
          "w": 92,
          "h": 11.4,
          "label": "인증번호 입력"
        }
      },
      {
        "t": "새 비밀번호 입력 후 \"변경\" 선택",
        "img": "images/web/web_10.jpg",
        "alt": "비밀번호변경",
        "full": true,
        "hl": {
          "top": 24.2,
          "left": 41.8,
          "w": 19.6,
          "h": 22.9,
          "label": "변경"
        },
        "tip": {
          "lbl": "비밀번호 규칙",
          "html": "영문 + 숫자 포함 <strong>8~15자리</strong> · 예: Yong2024!"
        }
      }
    ],
    "complete": {
      "title": "비밀번호 변경 완료",
      "desc": "새 비밀번호로 로그인하실 수 있습니다."
    }
  }
};
const $=(s,p=document)=>p.querySelector(s);
const $$=(s,p=document)=>Array.from(p.querySelectorAll(s));
const landing=$('#landing');
const manual=$('#manual');
const flowTitle=$('#flowTitle');
const flowRoot=$('#flowRoot');
let io=null;
const esc=(s)=>(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
function setAppHeight(){ const vh=window.innerHeight*0.01; document.documentElement.style.setProperty('--appH', (vh*100) + 'px'); }
function setTab(key){ $$('.tab').forEach(btn=>btn.classList.toggle('on', btn.dataset.tab===key)); }
function arrowEl(){ const el=document.createElement('div'); el.className='arrow'; el.textContent='—'; return el; }
function completeEl(data){ const el=document.createElement('div'); el.className='complete'; el.innerHTML=`<div class="t">${esc(data.title)}</div><div class="d">${esc(data.desc)}</div>`; return el; }
function stepCard(stepNumber, step){ const el=document.createElement('div'); el.className='card'; el.innerHTML=`
<div class="head">
  <div class="num">${stepNumber}</div>
  <div>
    <div class="title">${step.t}</div>
    ${step.sub ? `<div class="sub">${step.sub}</div>` : ''}
  </div>
</div>
<div class="shot-area">
  <div class="phone">
    <div class="screen">
      <img class="img-blur ${step.full ? 'full' : ''}" src="${step.img}" alt="${esc(step.alt)}">
      <img class="img-sharp ${step.full ? 'full' : ''}" src="${step.img}" alt="">
      <span data-hl data-top="${step.hl.top}" ${step.hl.left!=null ? `data-left="${step.hl.left}"` : ''} ${step.hl.right!=null ? `data-right="${step.hl.right}"` : ''} data-w="${step.hl.w}" data-h="${step.hl.h}" data-label="${esc(step.hl.label || '')}" ${step.hl.pos ? `data-pos="${step.hl.pos}"` : ''}></span>
    </div>
  </div>
</div>`;
if(step.tip){ const tip=document.createElement('div'); tip.className='tip'; tip.innerHTML=`<div class="lbl">${step.tip.lbl}</div><p>${step.tip.html}</p>`; el.appendChild(tip); }
return el; }
function animateCards(){ if(io) io.disconnect(); io=new IntersectionObserver(entries=>{ entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('in'); }); },{threshold:.07}); $$('.card').forEach(card=>{ card.classList.remove('in'); io.observe(card); }); }
function buildSpot(){ $$('.screen').forEach(screen=>{ $$('.ring,.callout', screen).forEach(el=>el.remove()); const hl=$('[data-hl]', screen); if(!hl) return; const top=+hl.dataset.top; const w=+hl.dataset.w; const h=+hl.dataset.h; const left0=hl.dataset.left!=null ? +hl.dataset.left : null; const right0=hl.dataset.right!=null ? +hl.dataset.right : null; const label=hl.dataset.label || ''; const pos=hl.dataset.pos || 'below'; const left=(right0 != null) ? (100 - right0 - w) : left0; const ct=top; const cl=left; const cb=100 - (top + h); const cr=100 - (left + w); screen.style.setProperty('--ct', ct + '%'); screen.style.setProperty('--cr', cr + '%'); screen.style.setProperty('--cb', cb + '%'); screen.style.setProperty('--cl', cl + '%'); const ring=document.createElement('div'); ring.className='ring'; ring.style.cssText=`top:${top}%;left:${left}%;width:${w}%;height:${h}%;`; screen.appendChild(ring); const callout=document.createElement('div'); callout.className='callout'; const cTop=(pos === 'above') ? (top - 8) : (top + h + 3); let mid=left + (w / 2); mid=Math.min(Math.max(mid, 12), 88); callout.style.cssText=`top:${cTop}%;left:${mid}%;transform:translateX(-50%);`; callout.innerHTML=`<div class="bub">${esc(label)}</div>`; screen.appendChild(callout); }); }
async function waitImgs(root){ const imgs=$$('img', root); await Promise.all(imgs.map(img=>img.complete ? 0 : new Promise(resolve=>{ img.addEventListener('load', resolve, { once:true }); img.addEventListener('error', resolve, { once:true }); }))); }
async function render(key){ const data=FLOWS[key]; setTab(key); flowTitle.innerHTML=data.title; flowRoot.innerHTML=''; data.steps.forEach((step, index)=>{ flowRoot.appendChild(stepCard(index + 1, step)); if(index < data.steps.length - 1) flowRoot.appendChild(arrowEl()); }); if(data.complete) flowRoot.appendChild(completeEl(data.complete)); window.scrollTo(0,0); animateCards(); await waitImgs(flowRoot); buildSpot(); }
function openManual(key){ landing.style.display='none'; manual.style.display='block'; render(key); }
function backToLanding(){ manual.style.display='none'; landing.style.display='flex'; window.scrollTo(0,0); }
function bindAppEvents(){ $$('.choice-btn').forEach(btn=>btn.addEventListener('click',()=>openManual(btn.dataset.go))); const backBtn=$('#back'); if(backBtn) backBtn.addEventListener('click', backToLanding); $$('.tab').forEach(btn=>btn.addEventListener('click',()=>render(btn.dataset.tab))); window.addEventListener('resize',()=>{ setAppHeight(); manual.style.display === 'block' && buildSpot(); }); }
setAppHeight(); bindAppEvents();