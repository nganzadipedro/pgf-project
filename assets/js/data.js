(function(){
  const newsItems = [
    { id: 1, title: 'Operação Aurora reforça segurança noturna', description: 'Patrulhamento tático e ações de inteligência em bairros críticos.', image: 'assets/img/placeholders/news.svg', date: '2025-09-22', content: 'A Unidade Policial realizou a Operação Aurora com foco em áreas de maior incidência. A ação combinou patrulhamento tático, barreiras policiais e monitorização por câmeras, resultando na apreensão de materiais ilícitos e na redução de ocorrências.' },
    { id: 2, title: 'Campanha de prevenção nas escolas', description: 'Palestras sobre cidadania e prevenção à violência.', image: 'assets/img/placeholders/news.svg', date: '2025-09-10', content: 'Equipes de relações comunitárias visitaram escolas públicas para promover cultura de paz, cidadania e canal de denúncias anônimas.' },
    { id: 3, title: 'Nova viatura tática apresentada', description: 'Reforço da frota com tecnologia embarcada.', image: 'assets/img/placeholders/news.svg', date: '2025-08-28', content: 'A nova viatura conta com sistema de leitura de placas, câmeras 360º e rádio digital criptografado, aumentando a eficiência operacional.' },
    { id: 4, title: 'Formação em atendimento pré-hospitalar', description: 'Capacitação de efetivo para resposta a emergências.', image: 'assets/img/placeholders/news.svg', date: '2025-08-10', content: 'Agentes participaram de curso de APH com foco em atendimento a vítimas em ocorrências de grande complexidade.' },
    { id: 5, title: 'Integração com guarda municipal', description: 'Operação conjunta melhora tempo de resposta.', image: 'assets/img/placeholders/news.svg', date: '2025-07-30', content: 'A cooperação interinstitucional permitiu planeamento integrado e melhor cobertura territorial.' },
    { id: 6, title: 'Resultados do trimestre', description: 'Queda em índices de criminalidade.', image: 'assets/img/placeholders/news.svg', date: '2025-07-05', content: 'Dados mostram redução de furtos e roubos, fruto de policiamento orientado por dados e aproximação com a comunidade.' },
    { id: 7, title: 'Operação Lótus intensifica fiscalização', description: 'Ações coordenadas em vias de grande fluxo.', image: 'assets/img/placeholders/news.svg', date: '2025-06-22', content: 'Equipes reforçaram fiscalizações em corredores de tráfego com foco em prevenção de acidentes e combate a ilícitos.' },
    { id: 8, title: 'Projeto Bairro Seguro ampliado', description: 'Novas áreas com patrulhas comunitárias.', image: 'assets/img/placeholders/news.svg', date: '2025-06-01', content: 'Expansão do policiamento de proximidade com reuniões periódicas e canais diretos com moradores.' },
    { id: 9, title: 'Apreensão recorde de entorpecentes', description: 'Operação integrada com órgãos parceiros.', image: 'assets/img/placeholders/news.svg', date: '2025-05-15', content: 'A ação resultou na apreensão de grande quantidade de drogas, veículos e equipamentos utilizados pelo crime organizado.' },
    { id: 10, title: 'Novo canal de denúncias anónimas', description: 'Maior facilidade para reportar ocorrências.', image: 'assets/img/placeholders/news.svg', date: '2025-04-20', content: 'A população passa a contar com plataforma online e linha telefónica 24 horas para denúncias.' },
    { id: 11, title: 'Curso de mediação de conflitos', description: 'Capacitação focada em abordagem humanizada.', image: 'assets/img/placeholders/news.svg', date: '2025-04-05', content: 'Agentes realizaram formação específica em técnicas de negociação, comunicação não-violenta e mediação.' },
    { id: 12, title: 'Parceria com universidades', description: 'Pesquisa aplicada à segurança pública.', image: 'assets/img/placeholders/news.svg', date: '2025-03-25', content: 'Convênio firmado para intercâmbio de dados e desenvolvimento de soluções tecnológicas para a gestão operacional.' }
  ];

  const eventItems = [
    { id: 101, title: 'Formação Tática Nível I', description: 'Treinamento de técnicas de progressão e abordagem.', image: 'assets/img/placeholders/event.svg', date: '2025-10-30', place: 'Centro de Treinamento' },
    { id: 102, title: 'Corrida pela Paz', description: 'Evento desportivo aberto à comunidade.', image: 'assets/img/placeholders/event.svg', date: '2025-11-12', place: 'Parque Municipal' },
    { id: 103, title: 'Cerimónia de Medalhas', description: 'Reconhecimento ao mérito operacional.', image: 'assets/img/placeholders/event.svg', date: '2025-11-20', place: 'Quartel Central' },
    { id: 104, title: 'Oficina de Prevenção', description: 'Boas práticas de segurança residencial.', image: 'assets/img/placeholders/event.svg', date: '2025-12-03', place: 'Auditório Sul' },
    { id: 105, title: 'Doação de Sangue', description: 'Campanha solidária com hospital local.', image: 'assets/img/placeholders/event.svg', date: '2025-12-15', place: 'Hemocentro' },
    { id: 106, title: 'Simulado de Evacuação', description: 'Exercício de resposta a crise.', image: 'assets/img/placeholders/event.svg', date: '2026-01-08', place: 'Complexo Norte' }
  ];

  function getViews(key){
    const raw = localStorage.getItem(key);
    const v = parseInt(raw, 10);
    return Number.isFinite(v) ? v : 0;
  }

  function incrementViews(key){
    const current = getViews(key) + 1;
    localStorage.setItem(key, String(current));
    return current;
  }

  window.siteData = { newsItems, eventItems, getViews, incrementViews };
})();
