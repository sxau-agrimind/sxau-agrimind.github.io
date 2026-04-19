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
    { avatar: "👤", name: "胡志伟 副教授", role: "硕士生导师，山西省后稷实验室固定成员，中国计算机学会会员，爱丁堡大学、卡迪夫大学访问学者", desc: "研究方向为智能育种、知识表示与推理。以第一作者身份在KDD、IJCAI、EMNLP、 CIKM、Neurocomputing、International Journal of Agricultural and Biological Engineering、Computers and Electronics in Agriculture、农业工程学报等CCF A/B类顶级会议及SCI期刊发表10余篇论文。主导研发了后稷农业大模型、稷丰多模态农业大模型，长期担任国际会议NeurIPS、ACL、KDD、AAAI、IJCAI、EMNLP等审稿人。", email: "<a href=\"mailto:zhiweihu@whu.edu.cn\">zhiweihu@whu.edu.cn</a>"},
  ],
  cooperation: [
    { avatar: "👤", name: "李茹 山西大学教授", role: "二级教授，博士生导师，享受国务院政府特殊津贴专家", desc: "山西大学学术委员会委员，计算机分学术委员会主任委员，山西省高等学校教学名师，山西省委直接联系高级专家，全国万名优秀创新创业导师，曾任山西大学计算机与信息技术学院副院长。现任中国中文信息学会常务理事，中国中文信息学会信息检索常务委员会委员及专业委员会委员，中国中文信息学会计算语言学、语言与知识计算专业委员会委员，山西省物联网和人工智能标准化技术委员会副主任委员，山西省计算机类专业教学指导委员会秘书长。是山西省高等学校拔尖创新人才、山西省学术技术带头人，中国宝钢教育奖优秀教师奖获得者。长期与美国加州大学伯克利分校（UC Berkeley）、英国爱丁堡大学（The University of Edinburgh）、新加坡科技局资讯通信研究院（A*STAR-I2R）进行合作研究。",},
    { avatar: "👤", name: "Jeff Z. Pan 爱丁堡大学教授", role: "博士生导师，教育部长江学者讲座教授", desc: "现任The University of Edinburgh信息学院教授，曾在The University of Aberdeen等高校任教；长期从事人工智能领域知识图谱、语义网、知识表示与推理等方向研究，在相关国际顶级会议（如ISWC等）和重要期刊发表论文数百篇，研究工作参与并推动了World Wide Web Consortium语义网核心标准（如OWL）的发展；曾担任国际会议程序委员会主席等学术服务职务，同时与工业界保持紧密合作。",},
    { avatar: "👤", name: "Victor Gutierrez Basulto 卡迪夫大学副教授", role: "博士生导师", desc: "现任Cardiff University计算机科学与信息学院副教授兼Director of Research，曾在University of Bremen等高校学习和从事研究工作；长期从事人工智能领域知识表示与推理、知识图谱、语义网、查询回答与表示学习等方向研究，在相关国际会议与期刊（如KR、AAAI、IJCAI等）发表多篇论文，研究工作主要围绕描述逻辑与知识图谱推理方法的发展，以推动神经符号人工智能（neuro-symbolic AI）在复杂数据场景中的应用；曾担任多个国际会议程序委员会成员等学术服务职务，并参与多项科研项目，与学术界保持活跃合作。",},
    { avatar: "👤", name: "谢倩倩 武汉大学教授", role: "博士生导师，语言与信息中心副主任，国家高层次青年人才项目（海外）", desc: "曾任耶鲁大学副研究科学家，并在康奈尔大学、蒙特利尔大学、曼彻斯特大学工作与访问。长期从事自然语言处理的研究，在国际顶级会议NeurIPS/ACL/EMNLP/NAACL/KDD/SIGIR/WWW和国际顶级期刊Nature Communications/npj Digital Medicine/TOIS/TKDE等发表论文60余篇。中文信息学会社交媒体处理专委会委员，中文信息学会医疗健康与生物信息处理专委会委员。获得湖北省科技进步二等奖1项，CCL 2024亮点英文论文奖，主持2025年CCF-腾讯犀牛鸟基金项目。和曼彻斯特大学、耶鲁大学、NYU、哈佛、哥大、明尼苏达大学、蒙特利尔大学等国内外高校保持长期合作。",},
  ],
  students: [
    { avatar: '<img src="img/杨森杰.jpg">', name: "杨森杰", university: "山西大学", role: "硕士生 (2025级)", desc: "研究方向：多组学分析与杂粮智能育种、基因组基础模型构建。",},
    { avatar: '<img src="img/李小宇.jpg">', name: "李小宇", university: "山西农业大学", role: "硕士生 (2025级)", desc: "研究方向：基因集富集分析智能体研发。",},
    { avatar: '<img src="img/任子奇.jpg">', name: "任子奇", university: "山西农业大学", role: "硕士生 (2025级)", desc: "研究方向：作物病害诊断智能体研发与应用。",},
    { avatar: '<img src="img/王家琦.jpg">', name: "王家琦", university: "山西农业大学", role: "硕士生 (2026级)", desc: "研究方向：旅游知识图谱自动化构建与智能问答、旅游相关智能体研发。",},
    { avatar: '<img src="img/李中原.jpg">', name: "李中原", university: "山西大学", role: "硕士生 (2026级)", desc: "研究方向：杂粮知识图谱自动化构建与评估、杂粮可溯源育种报告生成。",},
    { avatar: '<img src="img/吕乾甲.jpg">', name: "吕乾甲", university: "山西农业大学", role: "硕士生 (2026级)", desc: "研究方向：Agentic RAG赋能智慧旅游。",},
    { avatar: '<img src="img/刘丹.jpg">', name: "刘丹", university: "山西农业大学", role: "硕士生 (2026级)", desc: "研究方向：Agentic Skills 杂粮相关Benchmark构建与评估。",},
    { avatar: '<img src="img/郝志超.jpg">', name: "郝志超", university: "山西农业大学", role: "硕士生 (2026级)", desc: "研究方向：杂粮育种智能体研发、多智能体协同。",},
  ],
  undergrads: [
    { avatar: '<img src="img/王景源.jpg">', name: "王景源", university: "山西农业大学", role: "大一 / 计算机科学", desc: "学科竞赛、大模型基础知识学习",},
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
