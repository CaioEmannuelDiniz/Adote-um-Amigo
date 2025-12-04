const { useState } = React; 


const dadosAnimais = [
    {
        nome: "Rex",
        idade: 2,
        unidade: "anos",
        tipo: "Cachorro", 
        image: "https://images.unsplash.com/photo-1609348490161-a879e4327ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        descricao: "Thor é um cão dócil e brincalhão que adora passear. Perfeito para uma família ativa.",
    },
    {
        nome: "Luna",
        idade: 1,
        unidade: "anos",
        tipo: "Gato",
        image: "https://images.unsplash.com/photo-1702914954859-f037fc75b760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        descricao: "Luna é uma gatinha calma e independente, adora tirar longos cochilos e brincar com penas.",
    },
    {
        nome: "Bob",
        idade: 4,
        unidade: "meses",
        tipo: "Cachorro", 
        image: "https://images.unsplash.com/photo-1543888368-e0821c2ac6b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMHB1cHB5fGVufDF8fHx8MTc2NDcyNTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        descricao: "Bob é um cão de porte médio, muito leal e protetor. Se dá bem com crianças mais velhas.",
    },
    {
        nome: "Mia",
        idade: 1,
        unidade: "anos",
        tipo: "Gato", 
        image: "https://images.unsplash.com/photo-1613915588863-e6cc05fcaa16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwa2l0dGVufGVufDF8fHx8MTc2NDY3MzkzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        descricao: "Mia é uma gatinha jovem e brincalhona. Está sempre pronta para se divertir e explorar. Precisa de uma família que tenha tempo para brincar e interagir com ela",
    },
    {
        nome: "Thor",
        idade: 5,
        unidade: "anos",
        tipo: "Cachorro", 
        image: "https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2d8ZW58MXx8fHwxNzY0NjE2ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        descricao: "Thor é um golden retriever muito gentil e protetor. Adora longas caminhadas e é muito leal. Ideal para famílias ativas que gostem de atividades ao ar livre",
    },
    {
        nome: "Belinha",
        idade: 2,
        unidade: "anos",
        tipo: "Gato", 
        image: "https://images.unsplash.com/photo-1613915588863-e6cc05fcaa16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5ZnVsJTIwa2l0dGVufGVufDF8fHx8MTc2NDY3MzkzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        descricao: "Belinha é uma gatinha muito carinhosa que adora colo. É calma e se adapta facilmente a novos ambientes. Perfeita para quem mora em apartamento.",
    }

];

// --- Componentes ---

function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <a className="flex items-center gap-2" href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart w-8 h-8 text-blue-400 fill-blue-400"
                    >
                        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                    </svg>
                    <span className="text-blue-600">Adote um Amigo</span>
                </a>
            </div>
        </header>
    );
}

function Banner() {
    return (
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl text-blue-600 mb-4 font-bold">Adote um Amigo</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
                Encontre seu novo melhor amigo! Nossos animais estão esperando por uma família que possa oferecer amor, carinho e um lar seguro.
            </p>
        </div>
    );
}

function SecaoPrincipal() {
    return <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">Animais Disponíveis</h2>;
}

function Card({ animal, abrirModal }) {
    return (
        <>
            <div className="aspect-square overflow-hidden">
                <img
                    src={animal.image}
                    alt={animal.nome}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{animal.nome}</h3>
                <p className="text-gray-600 mb-4">
                    {animal.tipo} • {animal.idade} {animal.unidade}
                </p>

                <button
                    className="bg-blue-500 hover:bg-blue-600 transition text-white mt-3 px-4 py-2 rounded-lg"
                    onClick={() => abrirModal(animal)}
                >
                    Ver mais
                </button>
            </div>
        </>
    );
}

function Cards({ animais, abrirModal }) {
    return (
        <>
            {animais.map((animal, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                    {/* Passamos 'abrirModal' para o Card */}
                    <Card animal={animal} abrirModal={abrirModal} />
                </div>
            ))}
        </>
    );
}

function DetailView({ animal, voltar, abrirFormulario }) {
    return (
        <section className="flex flex-col md:flex-row items-start gap-10">
            {/* Voltar (top-left) */}
            <div className="w-full md:w-auto md:flex-shrink-0">
                <button onClick={voltar} className="flex items-center gap-2 text-gray-600 mb-6 hover:text-blue-500 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18l-6-6 6-6"></path>
                    </svg>
                    Voltar
                </button>
            </div>

            {/* Novo container para o layout Detalhe */}
            <div className="grid md:grid-cols-2 gap-8 items-start w-full">
                {/* Conteúdo principal: imagem grande à esquerda */}
                <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={animal.image} alt={animal.nome} className="w-full h-auto object-cover" />
                </div>

                {/* Card branco à direita */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{animal.nome}</h2>

                    <div className="text-gray-600 mb-6 space-y-2">
                        <div className="flex items-center gap-4">
                            <span className="w-24 font-medium">Espécie:</span>
                            <span className="text-gray-700">{animal.tipo}</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="w-24 font-medium">Idade:</span>
                            <span className="text-gray-700">{animal.idade} {animal.unidade}</span>
                        </div>
                    </div>

                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Sobre {animal.nome}</h3>
                    <p className="text-gray-600 leading-relaxed mb-8">{animal.descricao}</p>

                    {/* CHAMANDO A FUNÇÃO PARA MUDAR PARA A VIEW 'form' */}
                    <button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full text-lg transition"
                        onClick={abrirFormulario}
                    >
                        Quero Adotar
                    </button>
                </div>
            </div>
        </section>
    );
}

function AdoptionFormView({ animal, voltarDetalhes, voltarHome }) {

    const infoAnimal = `(${animal.tipo}, ${animal.idade} ${animal.unidade})`;


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [motivo, setMotivo] = useState('');

    
    const WHATSAPP_NUMBER = '5583988940862'; 

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        if (!nome || !email || !motivo) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        // Monta a mensagem formatada para o WhatsApp
        const mensagem = `Olá! Gostaria de iniciar o processo de adoção do animal ${animal.nome}.

        *DADOS DO ADOTANTE:*
        *Nome:* ${nome}
        *Email:* ${email}

        *MOTIVO DA ADOÇÃO:* ${motivo}

        *ANIMAL SELECIONADO:*
        *Nome:* ${animal.nome} 
        *Espécie:* ${animal.tipo}
        *Idade:* ${animal.idade} ${animal.unidade}
        `.trim();

        // 3. CODIFICAÇÃO E CONSTRUÇÃO DO LINK
        // EncodeURIComponent garante que o texto especial (quebras de linha, acentos)
        // seja formatado corretamente para a URL.
        const encodedMessage = encodeURIComponent(mensagem);
        const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Abre o link do WhatsApp em uma nova aba
        window.open(whatsappLink, '_blank');

        // Opcional: Limpa o formulário e retorna para a lista
        setNome('');
        setEmail('');
        setMotivo('');

        // Simula a finalização do processo e volta para a Home
        setTimeout(() => {
            voltarHome();
        }, 500);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Botão de Voltar para a tela anterior */}
            <button onClick={voltarDetalhes} className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18l-6-6 6-6"></path>
                </svg>
                Voltar para Detalhes
            </button>

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
                <h2 className="text-3xl font-bold text-blue-600 mb-2">Formulário de Adoção</h2>

                <p className="text-gray-600 mb-8">
                    Preencha as informações para iniciar o processo de adoção de <span className="text-blue-500">{animal.nome}</span> {infoAnimal}.
                </p>


                {/* O Formulário de Exemplo */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Seu Nome Completo</label>
                        <input
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} type="text" id="nome" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">Por que você quer adotar?</label>
                        <textarea
                            required
                            value={motivo}
                            onChange={(e) => setMotivo(e.target.value)}
                            id="motivo" rows="4" className="resize-none mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition">
                        Enviar Pedido de Adoção
                    </button>
                </form>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-16">
            <div className="container mx-auto px-4 py-8 text-center text-gray-600">
                <p>© 2025 Adote um Amigo. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}


function App() {
    const animais = dadosAnimais;

    // Novo estado para controlar a View atual: 'list' | 'detail' | 'form'
    const [view, setView] = useState('list');

    // Mantemos o animal selecionado
    const [animalSelecionado, setAnimalSelecionado] = useState(null);

    // FUNÇÕES DE NAVEGAÇÃO

    // 1. Abre a tela de Detalhes
    const navegarParaDetalhes = (animal) => {
        setAnimalSelecionado(animal);
        setView('detail');
    };

    // 2. Abre a tela de Formulário
    const navegarParaFormulario = () => {
        setView('form');
    };

    // 3. Volta para a Lista Principal
    const navegarParaLista = () => {
        setAnimalSelecionado(null);
        setView('list');
    };

    // 4. Volta da tela do formulário para os Detalhes
    const navegarParaDetalhesDeFormulario = () => {
        setView('detail');
    };

    let content;

    if (view === 'list') {
        content = (
            <>
                <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 -mx-6 mb-10">
                    <Banner />
                </section>
                <SecaoPrincipal />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Passamos navegarParaDetalhes como a função de clique */}
                    <Cards animais={animais} abrirModal={navegarParaDetalhes} />
                </div>
            </>
        );
    } else if (view === 'detail' && animalSelecionado) {
        content = (
            <DetailView
                animal={animalSelecionado}
                voltar={navegarParaLista} 
                abrirFormulario={navegarParaFormulario} 
            />
        );
    } else if (view === 'form' && animalSelecionado) {
        content = (
            <AdoptionFormView
                animal={animalSelecionado}
                voltarDetalhes={navegarParaDetalhesDeFormulario} 
                voltarHome={navegarParaLista} 
            />
        );
    } else {
        // Caso de erro ou estado inicial, volta para a lista
        content = <p className="text-center text-red-500">Erro ao carregar conteúdo. <button onClick={navegarParaLista}>Voltar</button></p>;
    }


    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main className="container mx-auto px-6 py-10">
                    {content}
                </main>
                <Footer />
            </div>
        </>
    );
}
