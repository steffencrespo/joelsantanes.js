<template>
  <div class="max-w-2xl w-full p-6 bg-gray-800 rounded-xl shadow-lg">
    <h1 class="text-2xl font-bold mb-4 text-center">Joel Santanês Translator</h1>
    <p class="text-center italic text-gray-400 mb-6">
      “Very goodi, very smarti. Esse app é só pra rir, you know?”
    </p>
    <textarea
      v-model="inputText"
      class="w-full p-3 rounded bg-gray-700 text-white mb-4"
      rows="4"
      placeholder="Digite sua frase em português..."
    ></textarea>
    <div class="flex gap-2 mb-4 flex-col md:flex-row">
      <button
          @click="translate"
          class="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Traduzir
      </button>
      <button
          @click="speak"
          class="w-full md:w-1/2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
      >
        🔊 Ouvir Joel
      </button>
    </div>
    <div v-if="outputText" class="bg-gray-700 p-3 rounded">
      <p>{{ outputText }}</p>
    </div>
    <footer class="mt-8 text-xs text-center text-gray-500">
      Este projeto é uma paródia e homenagem ao lendário técnico Joel Santana. <br />
      Não possui afiliação com o Sr. Joel Santana ou entidades relacionadas.<br />
      Todos os conteúdos são gerados de forma humorística e educativa.
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import joelify from './joelify'

const inputText = ref('')
const outputText = ref('')
const availableVoices = ref([])

onMounted(() => {
  speechSynthesis.onvoiceschanged = () => {
    availableVoices.value = speechSynthesis.getVoices()
  }

  availableVoices.value = speechSynthesis.getVoices()
})

function translate() {
  // Mock: usa o próprio texto como se fosse traduzido e Joelizado
  const fakeTranslated = inputText.value // Aqui usaria API do Google Translate
  outputText.value = joelify(fakeTranslated)
}

function speak() {
  if (!outputText.value && inputText.value.trim()) {
    const translated = inputText.value
    outputText.value = joelify(translated)
  }

  if (!outputText.value) return

  const utterance = new SpeechSynthesisUtterance(outputText.value);

  const voices = speechSynthesis.getVoices();
  const joelVoice = voices.find(v => v.name === 'Reed (Portuguese (Brazil))');
  // const joelVoice = voices.find(v => v.name === 'Grandpa (Portuguese (Brazil))');

  if (joelVoice) {
    utterance.voice = joelVoice;
    utterance.lang = 'en-US'; // mantém idioma como inglês com sotaque BR
  }

  // ajusta performance “Joelística”
  utterance.pitch = 0.85; // mais grave
  utterance.rate = 0.98;  // mais lento

  speechSynthesis.speak(utterance);
}

</script>
