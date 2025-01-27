import ReactMarkdown from 'react-markdown';

const markdownText = `
# ¡Descifrando las abreviaturas del chat en español (con trucos incluidos)!

¿Te has topado alguna vez con mensajes en español que parecen escritos en código? ¡No eres el/la únic@! El mundo de los chats está lleno de abreviaturas, símbolos y curiosidades que pueden confundir a cualquiera. En este artículo, te explicaremos algunas de las más comunes, **incluyendo** un par de trucos con \`+\` y \`-\` para que puedas chatear como un(a) profesional. 

---

## 1. ¿Por qué abreviamos?

La razón principal es **velocidad**. Queremos contar algo rápido y, en lugar de escribir la palabra completa, la cortamos. También existe un componente de **creatividad**: a veces la gente se divierte inventando formas de expresarse que suenan más “cool” o ahorran tiempo.

---

## 2. Abreviaturas y símbolos más comunes

Aquí tienes una lista para que la próxima vez no te sientas en un laberinto de letras y símbolos.

1. **k** = **que**  
   - Ejemplo: “k dices?” → “¿Qué dices?”

2. **xq** = **por qué** o **porque** (depende del contexto)  
   - “xq no vienes?” → “¿Por qué no vienes?”
   - “lo hice xq quise” → “Lo hice porque quise”

3. **xfa** = **por favor**  
   - “ayúdame xfa” → “Ayúdame, por favor”

4. **tb** = **también**  
   - “yo tb voy” → “Yo también voy”

5. **qtl** = **¿qué tal?**  
   - “hola, qtl?” → “Hola, ¿qué tal?”

6. **kdms** = **quedamos**  
   - “kdms hoy?” → “¿Quedamos hoy?”

7. **nd** = **nada**  
   - “q haces? nd, y tú?” → “¿Qué haces? Nada, ¿y tú?”

8. **salu2** = **saludos**  
   - “cuidate, salu2” → “Cuídate, saludos”

9. **besi2** = **besitos**  
   - “gracias por todo, besi2” → “Gracias por todo, besitos”

10. **ntp** = **no te preocupes**  
    - “ntp, luego lo vemos” → “No te preocupes, luego lo vemos”

11. **tkm** = **te quiero mucho**  
    - “oye, tkm” → “Oye, te quiero mucho”

12. **toi** = **estoy**  
    - “toi cansad@” → “Estoy cansad@”

13. **vdd** = **verdad**  
    - “es vdd?” → “¿Es verdad?”

14. **dnd** = **dónde**  
    - “dnd estás?” → “¿Dónde estás?”

15. **mñn** = **mañana**  
    - “kdms mñn?” → “¿Quedamos mañana?”

---

## 3. ¡Ojo con los símbolos + y -!

Además de las abreviaturas, hay personas que usan \`+\` y \`-\` para “sintetizar” ideas:

- **+** = **más**  
  - Ejemplo: “Hoy hace + calor q ayer” → “Hoy hace más calor que ayer”
  - También se usa para decir “¿Algo más?” → “¿Algo +?”

- **-** = **menos**  
  - Ejemplo: “Hoy hay - gente en la oficina” → “Hoy hay menos gente en la oficina”
  - O para decir “¿Nada más?”: “¿Nada -?” (un poco menos común, ¡pero pasa!)

Estos símbolos se usan como abreviaciones rápidas para sumar o restar importancia a algo. ¡Sí, es casi como hacer matemáticas en el chat!

---

## 4. Algo “tricky”: abreviaturas que cambian con el contexto

Hay abreviaturas que **pueden significar cosas diferentes** dependiendo de la conversación. Aquí van algunas que pueden sacarte canas verdes:

1. **q** (sola) = **que**, pero a veces **qué**  
   - Si alguien te escribe “q?” podría significar “¿Qué?” o “¿Qué pasa?”
   - Si escribe “q dices?”, sería “¿Qué dices?”

2. **x** puede ser **por**, **por favor**, o simplemente la letra “x”  
   - “x ti” → “por ti”
   - “pásame la foto xfa” → “pásame la foto por favor” (aunque aquí en realidad iría “x fa”, pero a veces la gente lo une todo)

3. **+** como pregunta  
   - A veces ves un mensaje que sólo dice “+?” → “¿Algo más que quieras decir?” 
   - O en grupos: “¿Quién se une +?” → “¿Quién más se une?”

La clave está en **adivinar el contexto** o, si no estás segur@, **preguntar**. ¡No pasa nada, mejor eso que quedarte con la duda!

---

## 5. Consejos para no enloquecer en el chat

- **Lee dos veces**: A veces la abreviatura es tan corta que puede significar dos cosas distintas. 
- **Pregunta sin miedo**: Si no entiendes, di algo como “¿Qué significa eso? Soy nuev@ con las abreviaturas”.
- **Usa el sentido común**: Si tu amig@ dice “t veo + tarde”, seguramente quiso decir “Te veo más tarde” y no está haciendo una suma de matemáticas.

---

## 6. Conclusión

Las abreviaturas en español son parte del **día a día** en internet y redes sociales. Le dan rapidez, frescura y, a veces, un poco de humor a nuestras conversaciones. Aunque puedan parecer un jeroglífico al principio, en cuanto te acostumbras, puedes usarlas tú también… siempre que el contexto lo permita (no te vayas a mandar un correo formal lleno de “kdms” y “qtl?”).

Acuérdate de estos tips y, cuando veas un “+”, “-” o una frase que parece teclado roto, piensa que tal vez sea una abreviatura. ¡Y si no entiendes, pregunta! Es parte de la diversión.

---

Salu2 y + risas para tod@s!
`;

export default function GuidePage() {
  return (
    <section>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </section>
  );
}
