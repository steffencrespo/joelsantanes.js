const regexps = [
    // países, locais, pontos cardeais
    [/\barábia saudita\b/gi, "saudi arábia"],
    [/\bbrasil\b/gi, "bréziu"],

    // # ordem/posição
    [/\bprimeiro\b/gi, "faristi"],
    [/\bsegundo\b/gi, "segundi"],
    [/\btempo\b/gi, "táimi"],
    [/\besquerda\b/gi, "lefiti"],
    [/\bdireit(a|o)\b/gi, "raiti"],
    [/\bdireit(as|os)\b/gi, "raiti"],
    [/\bmeio\b/gi, "midiu"],

    // quantidade
    [/\btod(o|a)\b/gi, "áu"],
    [/\btod(os|as)\b/gi, "áu"],

    // palavras
    [/\bque\b/gi, "qui"],
    [/\btem\b/gi, "hevi"],
    [/\b(equipe|time)\b/gi, "equipi"],
    [/\bjogou\b/gi, "prei"],
    [/\bjog(a|ador)\b/gi, "pleier"],
    [/\bigual\b/gi, "semi"],
    [/\bpartida\b/gi, "mét"],
    [/\bcontrol(a|ou)\b/gi, "contrôu"],
    [/\bmelhor\b/gi, "bexti"],
    [/\boportunidade\b/gi, "oportuniti"],
    [/\bchurrasco\b/gi, "bárbiquiu"],
    [/\bgol\b/gi, "ixcoar"],
    [/\b(atrás|tras)\b/gi, "blihaindiu"],
    [/\btroca\b/gi, "tchange"],
    [/\bexperiente\b/gi, "experient"],
    [/\bexterior\b/gi, "extrandjeir"],
    [/\bexperiencia\b/gi, "experienci"],
    [/\bgost(a|o)\b/gi, "láiqui"],
    [/\bviaj(a|o)(r|rem)\b/gi, "tráviliu"],

    [/\b(\w{3,}?)ão\b/gi, "$1ión"],
    [/\sto\s/gi, " tchú "],
    [/\svocê\s/gi, " iú "],
    [/\bfazer\b/gi, "mêki"],
    [/\b(a|o)\b/gi, "di"],
    [/\b(as|os)\b/gi, "di"],
    [/\bda\b/gi, "of"],
    [/\bdo\b/gi, "of"],
    [/\bde\b/gi, "frlom"],
    [/\bna\b/gi, "in di"],
    [/\bno\b/gi, "in di"],
    [/\bcom\b/gi, "uíf"],
    [/\b(para|pra|pro)\b/gi, "di"],
    [/\sé\s/gi, " ix "],
    [/\ba\b/gi, "di"],
    [/\bo\b/gi, "di"],
    [/(\b)só\s/gi, "$1only "],
    [/\be\b/gi, "ândi"],
    [/\bdepois\b/gi, "éfite"],
    [/\bestão\b/gi, "están"],
    [/\bnão\b/gi, "nóti"],
    [/\beu\b/gi, "ái"],
    [/\bmas\b/gi, "bâti"],
    [/\buma(s{0,1})\b/gi, "ôni$1"],
    [/\bum\b/gi, "ôni"],
    [/\b(minha|meu)\b/gi, "mái"],
    [/\b(s|t)(ua|eu)\b/gi, "ió"],
    [/\b(tu|você)\b/gi, "iú"],
    [/\bem\b/gi, "in di"],
    [/\b(bom|bem|boa)\b/gi, "véri gúdi"],
    [/\b(minhas|meus)\b/gi, "mái"],
    [/\bcara\b/gi, "dúdi"],
    [/\bhoje\b/gi, "tchudê"],
    [/\bontem\b/gi, "iéixterdê"],
    [/\bcedo\b/gi, "véri cedo"],
    [/\bisso\b/gi, "déti"],
    [/\bmuito\b/gi, "véri"],
    [/\bmelhor(es)?\b/gi, 'béxti'],
    [/\bnós\b/gi, "uí"],
    [/\boutro(s?)\b/gi, "óder$1"],
    [/\btroc(ar|o)\b/gi, "chânger"],
    [/\bse\b/gi, "ífi"],
    [/\bquer\b/gi, "uánti"],
    [/\bquero\b/gi, "uánti"],
    [/\baqui\b/gi, "hír"],
    [/\bali\b/gi, "dér"],
    [/\bdoce\b/gi, "suíti"],
    [/\bfora\b/gi, "áut"],
    [/\bou\b/gi, "ou"],
    [/\bmais\b/gi, "móri"],
    [/\bcalças\b/gi, "pánti"],
    [/\blegal\b/gi, "véri gúdi"],
    [/\bbons\b/gi, "gúdi"],
];

export default function joelify(original, debug = false) {
    let previous, result, regexp, sub;
    if (typeof original !== 'string') return undefined;

    result = original;

    for (let i = 0, limit = regexps.length; i < limit; i++) {
        previous = result;
        regexp = regexps[i][0];
        sub = regexps[i][1];
        result = result.replace(regexp, sub);

        if (debug) console.log(previous, regexp, sub, result);
    }

    return result;
}
