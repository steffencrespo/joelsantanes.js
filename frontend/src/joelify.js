const regexps = [

    // Locais e países
    [/\barábia saudita\b/gi, "saudi arábia"],
    [/\bbrasil\b/gi, "bréziu"],

    // Direções, posições e tempo
    [/\bprimeiro\b/gi, "faristi"],
    [/\bsegundo\b/gi, "segundi"],
    [/\btempo\b/gi, "táimi"],
    [/\besquerda\b/gi, "lefiti"],
    [/\bdireit(a|o|as|os)\b/gi, "raiti"],
    [/\bmeio\b/gi, "midiu"],
    [/\b(atrás|tras)\b/gi, "blihaindiu"],

    // Quantidade, ordem e referência
    [/\btod(o|a|os|as)\b/gi, "áu"],
    [/\bmais\b/gi, "móri"],
    [/\bmuito\b/gi, "véri"],
    [/\boutro(s?)\b/gi, "óder$1"],

    // Pessoas e pronomes
    [/\beu\b/gi, "ái"],
    [/\bvocê\b/gi, "iú"],
    [/\btu\b/gi, "iú"],
    [/\bnós\b/gi, "uí"],
    [/\b(minha|meu|minhas|meus)\b/gi, "mái"],
    [/\b(s|t)(ua|eu)\b/gi, "ió"],

    // Verbos e ações
    [/\btem\b/gi, "hevi"],
    [/\bjogou\b/gi, "prei"],
    [/\bjog(a|ador)\b/gi, "pleier"],
    [/\bfazer\b/gi, "mêki"],
    [/\bcontrol(a|ou)\b/gi, "contrôu"],
    [/\btroca\b/gi, "tchange"],
    [/\btroc(ar|o)\b/gi, "chânger"],
    [/\bgost(a|o)\b/gi, "láiqui"],
    [/\bquer(o)?\b/gi, "uánti"],
    [/\bviaj(a|o)(r|rem)?\b/gi, "tráviliu"],

    // Substantivos comuns
    [/\b(equipe|time)\b/gi, "equipi"],
    [/\bpartida\b/gi, "mét"],
    [/\bchurrasco\b/gi, "bárbiquiu"],
    [/\bgol\b/gi, "ixcoar"],
    [/\boportunidade\b/gi, "oportuniti"],
    [/\bexperiente\b/gi, "experient"],
    [/\bexperiencia\b/gi, "experienci"],
    [/\bexterior\b/gi, "extrandjeir"],
    [/\bdoce\b/gi, "suíti"],
    [/\bcalças\b/gi, "pánti"],
    [/\bcara\b/gi, "dúdi"],

    // 💬 Adjetivos positivos
    [/\bbom\b/gi, "véri gúdi"],
    [/\bbem\b/gi, "véri gúdi"],
    [/\bboa\b/gi, "véri gúdi"],
    [/\bbons\b/gi, "gúdi"],
    [/\blegal\b/gi, "véri gúdi"],

    // Conectores e gramática
    [/\bque\b/gi, "qui"],
    [/\bé\b/gi, "ândi"],
    [/\bmas\b/gi, "bâti"],
    [/\bse\b/gi, "ífi"],
    [/\bou\b/gi, "ou"],
    [/\be\b/gi, "ândi"],
    [/\bnão\b/gi, "nóti"],
    [/\bestão\b/gi, "están"],
    [/\bdepois\b/gi, "éfite"],
    [/\bisso\b/gi, "déti"],

    // Preposições e determinantes
    [/\b(a|o|as|os)\b/gi, "di"],
    [/\bna|no\b/gi, "in di"],
    [/\bda|do\b/gi, "of"],
    [/\bde\b/gi, "frlom"],
    [/\bem\b/gi, "in di"],
    [/\bcom\b/gi, "uíf"],
    [/\b(para|pra|pro)\b/gi, "di"],
    [/\baqui\b/gi, "hír"],
    [/\bali\b/gi, "dér"],
    [/\bfora\b/gi, "áut"],

    // Tempo e datas
    [/\bhoje\b/gi, "tchudê"],
    [/\bontem\b/gi, "iéixterdê"],
    [/\bcedo\b/gi, "véri cedo"],

    // Extras e expressões
    [/\bsó\b/gi, "only"],
    [/\buma(s{0,1})\b/gi, "ôni$1"],
    [/\bum\b/gi, "ôni"],
    [/\bmelhor(es)?\b/gi, 'béxti'],

    // Transformações fonéticas gerais
    [/\b(\w{3,}?)ão\b/gi, "$1ión"],
    [/\sto\s/gi, " tchú "],
    [/\sé\s/gi, " ix "]
]

export default function joelify(original, debug = false) {
    if (typeof original !== 'string') return undefined;

    let result = original;
    const placeholderMap = new Map();
    let tokenIndex = 0;

    // Fase 1: aplicar substituições e guardar em mapa
    for (let i = 0; i < regexps.length; i++) {
        const [regexp, sub] = regexps[i];
        result = result.replace(regexp, (match) => {
            const token = `__JOEL_TOKEN_${tokenIndex}__`;
            placeholderMap.set(token, sub);
            tokenIndex++;
            return token;
        });

        if (debug) console.log(result);
    }

    // Fase 2: substituir os tokens pelos valores reais
    for (const [token, value] of placeholderMap.entries()) {
        result = result.replaceAll(token, value);
    }

    return result;
}
