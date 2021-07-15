let studentDetail = function(studentScorce, totalScore){
    if(typeof studentScorce === 'number' && typeof totalScore === 'number'){
        let percentage = (studentScorce/totalScore) * 100
        let grade =''
        if(percentage>=90){
            grade = 'A'
        }else if(percentage>=80){
            grade ='B'
        }else if(percentage>=70){
            grade ='C'
        }else if(percentage>=60){
            grade = 'D'
        }else{
            grade = 'E'

        }
        return `You got ${grade} grades(${percentage}%)...!!!`
    }else {
            throw Error('Please Provide Numbers')
        }
   

}
try{
    let result = studentDetail(14, 20)
    console.log(result)
}catch (e){
    console.log('catch block is running')
}