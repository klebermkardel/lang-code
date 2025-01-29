const languages = [
  { name: "Assembly", description: "Uma linguagem de baixo nível usada para comunicação direta com hardware.", paradigm: "Imperativo", created: "1949", creator: "Kathleen Booth", logo: "https://www.svgrepo.com/show/373445/assembly.svg" },
  { name: "Ada", description: "Uma linguagem de programação estruturada, projetada para sistemas críticos.", paradigm: "Orientada a objetos", created: "1980", creator: "Jean Ichbiah", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ada_horizon_green_logo_with_slogan.svg/1200px-Ada_horizon_green_logo_with_slogan.svg.png" },
  { name: "Bash", description: "Um shell de comando amplamente utilizado em sistemas UNIX e Linux.", paradigm: "Imperativo", created: "1989", creator: "Brian Fox", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/640px-Gnu-bash-logo.svg.png" },
  { name: "Basic", description: "Fácil de aprender, foi muito usada no ensino de programação.", paradigm: "Imperativo", created: "1964", creator: "John G. Kemeny e Thomas E. Kurtz", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozk39BvhWEjCCgnCjeRxuOJJiCmLhZqHVeg&s" },
  { name: "C", description: "Uma linguagem de propósito geral que influenciou várias outras linguagens.", paradigm: "Procedural", created: "1972", creator: "Dennis Ritchie", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
  { name: "C++", description: "Extensão do C com suporte a programação orientada a objetos.", paradigm: "Orientada a objetos", created: "1985", creator: "Bjarne Stroustrup", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
  { name: "C#", description: "Desenvolvida pela Microsoft, muito usada para desenvolvimento Windows e jogos.", paradigm: "Orientada a objetos", created: "2000", creator: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" },
  { name: "Clojure", description: "Uma linguagem funcional para a JVM, baseada no Lisp.", paradigm: "Funcional", created: "2007", creator: "Rich Hickey", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" },
  { name: "COBOL", description: "Uma linguagem voltada para aplicações comerciais e financeiras.", paradigm: "Procedural", created: "1959", creator: "Grace Hopper", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw95B4dclJIxfRKN3Ifad1SZrlo3UR8lL3uw&s" },
  { name: "Crystal", description: "Uma linguagem rápida e eficiente com sintaxe inspirada no Ruby.", paradigm: "Orientada a objetos", created: "2014", creator: "Ary Borenszweig", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXuDMlNn-JcnI29DRHb0hhO37TaTzmL6n8nA&s" },
  { name: "D", description: "Projetada para desempenho e produtividade, como uma evolução do C++.", paradigm: "Multiparadigma", created: "2001", creator: "Walter Bright", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/D_Programming_Language_logo.svg/640px-D_Programming_Language_logo.svg.png" },
  { name: "Dart", description: "Criada pelo Google, usada principalmente no framework Flutter.", paradigm: "Orientada a objetos", created: "2011", creator: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" },
  { name: "Delphi", description: "Popular no desenvolvimento rápido de aplicações (RAD).", paradigm: "Orientada a objetos", created: "1995", creator: "Borland", logo: "https://energysystemsnetwork.com/wp-content/uploads/2015/01/delphi-logo-png-2.png" },
  { name: "Elixir", description: "Uma linguagem funcional projetada para sistemas distribuídos.", paradigm: "Funcional", created: "2011", creator: "José Valim", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Official_Elixir_logo.png/640px-Official_Elixir_logo.png" },
  { name: "Erlang", description: "Projetada para sistemas altamente disponíveis e distribuídos.", paradigm: "Funcional", created: "1986", creator: "Ericsson", logo: "https://www.erlang.org/assets/img/erlang-logo.svg" },
  { name: "F#", description: "Uma linguagem funcional da Microsoft, voltada para produtividade.", paradigm: "Funcional", created: "2005", creator: "Don Syme", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxrk8A5_FFzs6QhjdjFPhQ5DGe0poOHycjQ&s" },
  { name: "Go", description: "Criada pelo Google, é conhecida pela simplicidade e desempenho.", paradigm: "Procedural", created: "2009", creator: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
  { name: "Groovy", description: "Uma linguagem dinâmico para a JVM, com sintaxe semelhante ao Java.", paradigm: "Orientada a objetos", created: "2003", creator: "James Strachan", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/1200px-Groovy-logo.svg.png" },
  { name: "Haskell", description: "Uma linguagem funcional pura, com forte inferência de tipos.", paradigm: "Funcional", created: "1990", creator: "Simon Peyton Jones", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg" },
  { name: "HTML", description: "A linguagem padrão de marcação para documentos da web.", paradigm: "Marcação", created: "1993", creator: "Tim Berners-Lee", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "Java", description: "Popular em aplicações empresariais e desenvolvimento Android.", paradigm: "Orientada a objetos", created: "1995", creator: "James Gosling", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { name: "JavaScript", description: "Linguagem essencial para desenvolvimento web front-end e back-end.", paradigm: "Multiparadigma", created: "1995", creator: "Brendan Eich", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Julia", description: "Projetada para computação científica e matemática.", paradigm: "Multiparadigma", created: "2012", creator: "Jeff Bezanson", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Julia_prog_language.svg/1200px-Julia_prog_language.svg.png" },
  { name: "Kotlin", description: "A linguagem oficial para desenvolvimento Android.", paradigm: "Orientada a objetos", created: "2011", creator: "JetBrains", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" },
  { name: "Lua", description: "Uma linguagem leve e embutida em aplicativos e jogos.", paradigm: "Multiparadigma", created: "1993", creator: "PUC-Rio", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" },
  { name: "MATLAB", description: "Usada principalmente para computação numérica e análise de dados.", paradigm: "Imperativo", created: "1984", creator: "MathWorks", logo: "https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/6301871740192a1336bcd908_32e39e57.png" },
  { name: "Objective-C", description: "Uma extensão do C usada principalmente no desenvolvimento para macOS e iOS.", paradigm: "Orientada a objetos", created: "1984", creator: "Brad Cox", logo: "https://static-00.iconduck.com/assets.00/objective-c-icon-1024x1024-dj7xxf4d.png" },
  { name: "Pascal", description: "Popular no ensino de programação, com foco em clareza e estrutura.", paradigm: "Procedural", created: "1970", creator: "Niklaus Wirth", logo: "https://img.icons8.com/fluent/512/pascal.png" },
  { name: "Perl", description: "Uma linguagem versátil usada para scripts e automações.", paradigm: "Multiparadigma", created: "1987", creator: "Larry Wall", logo: "https://www.cdnlogo.com/logos/p/36/perl-programming-language.svg" },
  { name: "PHP", description: "Muito usada no desenvolvimento de sites dinâmicos.", paradigm: "Imperativo", created: "1995", creator: "Rasmus Lerdorf", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
  { name: "Python", description: "Uma linguagem simples e poderosa, popular em ciência de dados e aprendizado de máquina.", paradigm: "Multiparadigma", created: "1991", creator: "Guido van Rossum", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "R", description: "Usada para estatística e análise de dados.", paradigm: "Funcional", created: "1993", creator: "Ross Ihaka e Robert Gentleman", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" },
  { name: "Ruby", description: "Popular com o framework Ruby on Rails para web.", paradigm: "Orientada a objetos", created: "1995", creator: "Yukihiro Matsumoto", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
  { name: "Rust", description: "Focada em segurança e desempenho, sem garbage collection.", paradigm: "Multiparadigma", created: "2010", creator: "Mozilla", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" },
  { name: "Scala", description: "Combina programação funcional e orientada a objetos.", paradigm: "Multiparadigma", created: "2004", creator: "Martin Odersky", logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" },
  { name: "Swift", description: "A linguagem oficial da Apple para desenvolvimento iOS e macOS.", paradigm: "Multiparadigma", created: "2014", creator: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
  { name: "TypeScript", description: "Um superconjunto do JavaScript com suporte a tipos.", paradigm: "Orientada a objetos", created: "2012", creator: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "Visual Basic", description: "Muito usada para criação de interfaces gráficas no Windows.", paradigm: "Event-driven", created: "1991", creator: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Microsoft_Visual_Basic_for_Applications_logo.svg" }
];

  // Ordenar as linguagens por ordem alfabética
  languages.sort((a, b) => a.name.localeCompare(b.name));

  
  const container = document.getElementById("languages-container");
  const searchInput = document.getElementById("search");
  
  // Função para renderizar os cards
  function renderCards(filter = "") {
    container.innerHTML = "";
  
    const filteredLanguages = languages.filter(lang => 
      lang.name.toLowerCase().startsWith(filter.toLowerCase())
    );
  
    // Exibir mensagem se nenhum resultado for encontrado
    if (filteredLanguages.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center">
          <p class="text-warning">Nenhuma linguagem encontrada.</p>
        </div>
      `;
      return;
    }
  
    filteredLanguages.forEach(lang => {
      const col = document.createElement("div");
      col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");
      col.innerHTML = `
        <div class="card h-100">
          <img src="${lang.logo}" alt="${lang.name} Logo">
          <div class="card-body">
            <h5 class="card-title">${lang.name}</h5>
            <p class="card-text">${lang.description}</p>
            <p><strong>Paradigma:</strong> ${lang.paradigm}</p>
            <p><strong>Criada em:</strong> ${lang.created}</p>
            <p><strong>Criador:</strong> ${lang.creator}</p>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  }
  
  // Filtrar enquanto o usuário digita
  searchInput.addEventListener("input", (e) => {
    renderCards(e.target.value.trim());
  });
  
  // Renderizar os cards iniciais (todos)
  renderCards();
  