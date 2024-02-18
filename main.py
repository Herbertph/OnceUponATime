from flask import Flask, request, jsonify
from openai import OpenAI
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
openai_client = OpenAI(api_key="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")

@app.route('/gerar_historia', methods=['POST'])
def gerar_historia():
    data = request.json

    # Monta o prompt para a OpenAI
    prompt = f"Generate a children's story with the main character being {data['selected_class']} in search of a {data['selected_item']} to save {data['selected_to_save']} with 220 words max."

    # Chama a API da OpenAI para gerar a história
    response = openai_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        stream=False
    )

    # Extrai a história gerada da resposta da API
    story = response.choices[0].message.content.strip()

    return jsonify({'story': story})

if __name__ == '__main__':
    app.run(debug=True)