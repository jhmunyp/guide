const HOTSPOTS = {
  "단계 2":[
    {left:18, top:60, width:30, height:12},
  ],
  "단계 5":[
    {left:10, top:45, width:80, height:12},
  ],
  "단계 7":[
    {left:8, top:30, width:84, height:55},
  ]
};

document.querySelectorAll('.img-box').forEach(box=>{
  const step = box.dataset.step;
  const list = HOTSPOTS[step] || [];
  const wrap = box.querySelector('.hotspots');
  list.forEach(h=>{
    const d = document.createElement('div');
    d.className = 'hotspot';
    d.style.left = h.left + '%';
    d.style.top = h.top + '%';
    d.style.width = h.width + '%';
    d.style.height = h.height + '%';
    wrap.appendChild(d);
  });
});
