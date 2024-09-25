<template>
    <input type="checkbox" id="checkbox" v-model="checkbox" />
    <label for="checkbox">{{ message }}</label>

    <br>
    <div>
      <select v-model="selected">
            <option 
                v-for="(option, index) in options" 
                :key="index" 
                :value="option.value"
            >
                {{ option.text }}
            </option>
        </select>
    </div>
    <div>선택됨: {{ selected }}</div>

    <div>
        <textarea  v-model="textMsg" placeholder="입력해주세요"/>
        <p>{{textMsg}}</p>
    </div>
    <div>
        <li v-for="(todo, index) in todos" :key="index">
            {{todo.job}}, {{index}}
        </li>
    </div>
    <div>
        <p>
            예/아니요 질문:
            <input v-model="question" />
        </p>
        <p>{{answer}}</p>
        <img v-if="image1" :src="image1"  alt="Fetched Image">
        <img v-if="image2" :src="image2"  alt="Fetched Image">
    </div>

</template>

<style scoped>
select {
    /* 기본 스타일 유지 */
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px; /* 모서리 둥글게 */
    background-color: #fff; /* 배경색 추가 */
}
</style>

<script>
export default {
    data() {
        return {
            checkbox: false, // 초기값 설정
            selected: '',
            options: [
                { text: '하나', value: '1' },
                { text: '둘', value: '2' },
                { text: '셋', value: '3' }
            ],
            textMsg: '',
            todos: [
                {job: '코딩 테스트'},
                {job: '사이드 프로젝트'},
                {job: 'CS'},
            ],
            question: '',
            answer: '질문에는 일반적으로 물음표가 포함됩니다.',
            image1: '',
            image2: '',
        };
    },
    watch: {
        question(newQuestion) {
            if(newQuestion.includes('?')){
                  this.getAnswer()     
            }
        }
    },
    methods: {
        async getAnswer(){
            this.answer = '생각 중...'
            try {
                const res = await fetch('http://10.102.0.1:8082/api/board/1')
                const data = await res.json();
                this.answer = data.answer === 'yes'?'네':'아니요'
                //this.image = data.files[0].data;  // JSON에서 image URL 추출
                const idata1 = data.files[0].data;
                const idata2 = data.files[1].data;

                this.image1 = `data:image/png;base64,${idata1}`;
                this.image2 = `data:image/png;base64,${idata2}`;
            } catch (error) {
                this.answer = '에러! API에 연결할 수 없습니다. ' + error
            }
        }
    },
    computed: {
        message() {
            return this.checkbox ? '성공' : '실패'; // 체크 상태에 따라 메시지 설정
        }
    }
};
</script>