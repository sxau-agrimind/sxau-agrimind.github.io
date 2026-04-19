function renderResearchGrid(researchData) {
  const grid = document.getElementById('researchGrid');
  grid.innerHTML = '';
  researchData.forEach(item => {

    grid.innerHTML += `
      <div class="research-card">
        <div class="research-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>

      </div>
    `;
  });
}

function renderTeacherGrid(teacherData) {
  const grid = document.getElementById('teacherGrid');
  grid.innerHTML = '';
  teacherData.forEach(item => {
    grid.innerHTML += `
      <div class="team-card-teacher">
        <div class="team-avatar-teacher">${item.avatar}</div>
        <div class="team-info-teacher">
          <h4>${item.name}</h4>
          <p class="role">${item.role}</p>
          <p class="desc">${item.desc}</p>
          <p class="email">📧 ${item.email}</p>
        </div>
      </div>
    `;
  });
}

function renderCooperationGrid(cooperationData) {
  const grid = document.getElementById('cooperationGrid');
  grid.innerHTML = '';
  cooperationData.forEach(item => {
    grid.innerHTML += `
      <div class="team-card-teacher">
        <div class="team-avatar-teacher">${item.avatar}</div>
        <div class="team-info-teacher">
          <h4>${item.name}</h4>
          <p class="role">${item.role}</p>
          <p class="desc">${item.desc}</p>
          <p class="email">📧 ${item.email}</p>
        </div>
      </div>
    `;
  });
}

function renderStudentGrid(studentData) {
  const grid = document.getElementById('studentGrid');
  grid.innerHTML = '';
  studentData.forEach(item => {
    grid.innerHTML += `
      <div class="team-card">
        <div class="team-avatar">${item.avatar}</div>
        <div class="team-info">
          <h4>${item.name}${item.university ? `<span class="member-university">${item.university}</span>` : ''}</h4>
          <p class="role">${item.role}</p>
          <p class="desc">${item.desc}</p>
        </div>
      </div>
    `;
  });
}

function renderUndergradGrid(undergradData) {
  const grid = document.getElementById('undergradGrid');
  grid.innerHTML = '';
  undergradData.forEach(item => {
    grid.innerHTML += `
      <div class="team-card">
        <div class="team-avatar">${item.avatar}</div>
        <div class="team-info">
          <h4>${item.name}${item.university ? `<span class="member-university">${item.university}</span>` : ''}</h4>
          <p class="role">${item.role}</p>
          <p class="desc">${item.desc}</p>
        </div>
      </div>
    `;
  });
}

function renderPaperList(paperData) {
  const list = document.getElementById('paperList');
  list.innerHTML = '';
  paperData.forEach(item => {
    const badgesHtml = item.badges.map(badge =>
      `<span class="paper-badge ${badge.highlight ? 'highlight' : ''}">${badge.text}</span>`
    ).join('');
    list.innerHTML += `
      <div class="paper-item">
        <div class="paper-year">
          <div class="year">${item.year}</div>
          <div class="venue">${item.venue}</div>
        </div>
        <div class="paper-content">
          <h4>${item.title}</h4>
          <p class="authors">${item.authors}</p>
          <div class="paper-meta">${badgesHtml}</div>
        </div>
      </div>
    `;
  });
}

function renderCompetitionGrid(competitionData) {
  const grid = document.getElementById('competitionGrid');
  grid.innerHTML = '';
  competitionData.forEach(item => {
    const medalIcon = item.type === 'gold' ? '🏆' : item.type === 'silver' ? '🥈' : '🥉';
    grid.innerHTML += `
      <div class="competition-card ${item.type}">
        <div class="medal">${medalIcon}</div>
        <h4>${item.title}</h4>
        <p class="award-level">${item.award}</p>
        <p class="competition-desc">${item.desc}</p>
      </div>
    `;
  });
}

function renderDemoGrid(demoData) {
  const grid = document.getElementById('demoGrid');
  grid.innerHTML = '';
  demoData.forEach(item => {
    grid.innerHTML += `
      <div class="demo-card">
        <div class="demo-preview">
          <div class="play-btn"></div>
        </div>
        <div class="demo-info">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <span class="demo-tag">${item.tag}</span>
        </div>
      </div>
    `;
  });
}

function renderContactGrid(contactData) {
  const grid = document.getElementById('contactGrid');
  grid.innerHTML = '';
  contactData.forEach(item => {
    grid.innerHTML += `
      <div class="contact-card">
        <div class="contact-icon">${item.icon}</div>
        <h4>${item.title}</h4>
        <p>${item.content}</p>
      </div>
    `;
  });
}

function renderFooterLinks(footerLinkData) {
  const links = document.getElementById('footerLinks');
  links.innerHTML = '';
  footerLinkData.forEach(item => {
    links.innerHTML += `<a href="${item.href}">${item.text}</a>`;
  });
}

window.switchTab = function(tabId) {
  document.querySelectorAll('.achievement-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
};

window.toggleMobileMenu = function() {
  const menu = document.getElementById('navMobile');
  menu.classList.toggle('open');
};

window.closeMobileMenu = function() {
  document.getElementById('navMobile').classList.remove('open');
};

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const DATA = {
  research: [
    { icon: "🌱", title: "多组学分析与智能育种", desc: "面向杂粮作物（如谷子、高粱等）育种需求，融合多组学数据与生物大模型，解析复杂性状遗传机制与环境适应规律，支撑优质高产杂粮的智能设计育种。",},
    { icon: "🏨", title: "智慧旅游与文旅智能服务", desc: "聚焦文旅产业高质量发展需求，结合大语言模型与多模态技术，开展旅游场景理解、内容生成与智能服务研究，提升文旅资源配置效率与游客体验。",},
    { icon: "🧠", title: "知识表示与认知推理", desc: "面向领域知识图谱构建与实际应用场景，融合大语言模型，研究复杂关系建模、知识对齐与多步推理方法，提升系统在问答、决策等任务中的准确性与可解释性。",},
  ],
  teachers: [
    { avatar: "👤", name: "胡志伟 副教授", role: "网络工程系主任，山西省后稷实验室固定成员，中国计算机学会会员，爱丁堡大学、卡迪夫大学访问学者", desc: "研究方向为智能育种、知识表示与推理。以第一作者身份在KDD、IJCAI、EMNLP、 CIKM、Neurocomputing、International Journal of Agricultural and Biological Engineering、Computers and Electronics in Agriculture、农业工程学报等CCF A/B类顶级会议及SCI期刊发表10余篇论文。主导研发了后稷农业大模型、稷丰多模态农业大模型，长期担任国际会议NeurIPS、ACL、KDD、AAAI、IJCAI、EMNLP等审稿人。", email: "<a href=\"mailto:zhiweihu@whu.edu.cn\">zhiweihu@whu.edu.cn</a>"},
  ],
  cooperation: [
    { avatar: "👤", name: "胡志伟 副教授", role: "网络工程系主任，山西省后稷实验室固定成员，中国计算机学会会员，爱丁堡大学、卡迪夫大学访问学者", desc: "研究方向为智能育种、知识表示与推理。以第一作者身份在KDD、IJCAI、EMNLP、 CIKM、Neurocomputing、International Journal of Agricultural and Biological Engineering、Computers and Electronics in Agriculture、农业工程学报等CCF A/B类顶级会议及SCI期刊发表10余篇论文。主导研发了后稷农业大模型、稷丰多模态农业大模型，长期担任国际会议NeurIPS、ACL、KDD、AAAI、IJCAI、EMNLP等审稿人。", email: "<a href=\"mailto:zhiweihu@whu.edu.cn\">zhiweihu@whu.edu.cn</a>"},
    { avatar: "👤", name: "胡志伟 副教授", role: "网络工程系主任，山西省后稷实验室固定成员，中国计算机学会会员，爱丁堡大学、卡迪夫大学访问学者", desc: "研究方向为智能育种、知识表示与推理。以第一作者身份在KDD、IJCAI、EMNLP、 CIKM、Neurocomputing、International Journal of Agricultural and Biological Engineering、Computers and Electronics in Agriculture、农业工程学报等CCF A/B类顶级会议及SCI期刊发表10余篇论文。主导研发了后稷农业大模型、稷丰多模态农业大模型，长期担任国际会议NeurIPS、ACL、KDD、AAAI、IJCAI、EMNLP等审稿人。", email: "<a href=\"mailto:zhiweihu@whu.edu.cn\">zhiweihu@whu.edu.cn</a>"},
    { avatar: "👤", name: "胡志伟 副教授", role: "网络工程系主任，山西省后稷实验室固定成员，中国计算机学会会员，爱丁堡大学、卡迪夫大学访问学者", desc: "研究方向为智能育种、知识表示与推理。以第一作者身份在KDD、IJCAI、EMNLP、 CIKM、Neurocomputing、International Journal of Agricultural and Biological Engineering、Computers and Electronics in Agriculture、农业工程学报等CCF A/B类顶级会议及SCI期刊发表10余篇论文。主导研发了后稷农业大模型、稷丰多模态农业大模型，长期担任国际会议NeurIPS、ACL、KDD、AAAI、IJCAI、EMNLP等审稿人。", email: "<a href=\"mailto:zhiweihu@whu.edu.cn\">zhiweihu@whu.edu.cn</a>"},
    { avatar: "👤", name: "胡志伟 副教授", role: "网络工程系主任，山西省后稷实验室固定成员，中国计算机学会会员，爱丁堡大学、卡迪夫大学访问学者", desc: "研究方向为智能育种、知识表示与推理。以第一作者身份在KDD、IJCAI、EMNLP、 CIKM、Neurocomputing、International Journal of Agricultural and Biological Engineering、Computers and Electronics in Agriculture、农业工程学报等CCF A/B类顶级会议及SCI期刊发表10余篇论文。主导研发了后稷农业大模型、稷丰多模态农业大模型，长期担任国际会议NeurIPS、ACL、KDD、AAAI、IJCAI、EMNLP等审稿人。", email: "<a href=\"mailto:zhiweihu@whu.edu.cn\">zhiweihu@whu.edu.cn</a>"},
  ],
  students: [
    { avatar: '<img src="img/杨森杰.jpg">', name: "杨森杰", university: "山西大学", role: "硕士生 (2025级)", desc: "研究方向：农业机器人视觉导航。主导开发果园巡检机器人系统。",},
    { avatar: '<img src="img/李小宇.jpg">', name: "李小宇", university: "山西农业大学", role: "硕士生 (2025级)", desc: "研究方向：农业机器人视觉导航。主导开发果园巡检机器人系统。",},
    { avatar: '<img src="img/任子奇.jpg">', name: "任子奇", university: "山西农业大学", role: "硕士生 (2025级)", desc: "研究方向：农业机器人视觉导航。主导开发果园巡检机器人系统。",},
    { avatar: '<img src="img/王家琦.jpg">', name: "王家琦", university: "山西农业大学", role: "硕士生 (2026级)", desc: "研究方向：农业知识图谱构建与推理。",},
    { avatar: '<img src="img/李中原.jpg">', name: "李中原", university: "山西大学", role: "硕士生 (2026级)", desc: "研究方向：农业机器人视觉导航。主导开发果园巡检机器人系统。",},
    { avatar: '<img src="img/吕乾甲.jpg">', name: "吕乾甲", university: "山西农业大学", role: "硕士生 (2026级)", desc: "研究方向：作物表型高通量分析。开发小麦穗数智能计数系统。",},
    { avatar: '<img src="img/刘丹.jpg">', name: "刘丹", university: "山西农业大学", role: "硕士生 (2026级)", desc: "研究方向：农业遥感图像智能解译。获CVPR农业遥感挑战赛冠军。",},
    { avatar: '<img src="img/郝志超.jpg">', name: "郝志超", university: "山西农业大学", role: "硕士生 (2026级)", desc: "研究方向：农业机器人视觉导航。主导开发果园巡检机器人系统。",},
  ],
  undergrads: [
    { avatar: '<img src="img/王景源.jpg">', name: "王景源", university: "山西农业大学", role: "大一 / 计算机科学", desc: "参与农业病虫害识别APP开发", email: "kwzhou@agrimind.edu.cn" },
  ],
  papers: [
    { year: "2024", venue: "TKDE", title: "AgriKG: A Large-Scale Knowledge Graph for Smart Agriculture with Multi-Modal Entity Alignment", authors: "Mingyuan Zhang*, Haoran Chen, Sihua Li, et al.", badges: [{ text: "CCF-A", highlight: true }, { text: "知识图谱", highlight: false }, { text: "多模态对齐", highlight: false }] },
    { year: "2024", venue: "CVPR", title: "Panoptic Part Segmentation for Crop Organs via Hierarchical Vision Transformers", authors: "Yutong Liu, Jianguo Wang, Mingyuan Zhang*, et al.", badges: [{ text: "CCF-A", highlight: true }, { text: "计算机视觉", highlight: false }] },
    { year: "2023", venue: "KDD", title: "Causal Inference for Agricultural Yield Prediction with Multi-Source Heterogeneous Data", authors: "Haoran Chen, Mingyuan Zhang, Sihua Li, et al.", badges: [{ text: "CCF-A", highlight: true }, { text: "因果推断", highlight: false }, { text: "产量预测", highlight: false }] }
  ],
  competitions: [
    { type: "gold", title: "CVPR 2024 农业遥感图像解译挑战赛", award: "全国一等奖 (金奖)", desc: "提出分层视觉Transformer架构，在作物器官分割任务中取得精度第一的成绩。" },
    { type: "silver", title: "中国智能农业装备创新大赛", award: "全国二等奖 (银奖)", desc: "研发果园巡检机器人导航系统，获农业农村部颁发的创新奖项。" },
    { type: "bronze", title: "国际大数据竞赛 (农业赛道)", award: "全球三等奖 (铜奖)", desc: "基于多模态数据的小麦产量预测模型，误差率低于5%。" }
  ],
  demos: [
    { title: "农业知识图谱可视化系统", desc: "支持农业实体检索、关系推理、知识问答的一站式可视化平台，覆盖10万+农业实体。", tag: "知识图谱" },
    { title: "作物表型高通量分析工具", desc: "基于计算机视觉的小麦、玉米表型参数自动提取系统，准确率达95%以上。", tag: "计算机视觉" },
    { title: "智慧果园巡检机器人", desc: "集成多传感器的自主导航机器人，实现病虫害识别、果实计数、生长状态监测。", tag: "农业机器人" }
  ],
  contact: [
    { icon: "📍", title: "实验室地址", content: "山西农业大学信息科学与工程学院" },
    { icon: "👤", title: "联系人", content: "胡志伟 副教授" },
    { icon: "📧", title: "电子邮箱", content: '<a href="mailto:zhiweihu@whu.edu.cn">zhiweihu@whu.edu.cn</a>' }
  ],
  footerLinks: [
    { text: "首页", href: "#home" },
    { text: "研究方向", href: "#research" },
    { text: "团队成员", href: "#team" },
    { text: "研究成果", href: "#achievements" },
    { text: "联系方式", href: "#contact" }
  ]
};

window.onload = function () {
  renderResearchGrid(DATA.research);
  renderTeacherGrid(DATA.teachers);
  renderCooperationGrid(DATA.cooperation);
  renderStudentGrid(DATA.students);
  renderUndergradGrid(DATA.undergrads);
  renderPaperList(DATA.papers);
  renderCompetitionGrid(DATA.competitions);
  renderDemoGrid(DATA.demos);
  renderContactGrid(DATA.contact);
  renderFooterLinks(DATA.footerLinks);
  document.getElementById('footerCopyright').textContent = `© ${new Date().getFullYear()} AgriMind Lab. All rights reserved.`;
};
