//generatePDF code
// function generatePDF(){
//     const ele = document.querySelector(".dataOfEmployee");
//     const options = {
//         filename: 'my-document.pdf',
//         margin: 1,
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//     };
//     html2pdf().set(options).from(ele).save();
// }


//1. color and textcolor
let selectColor = document.querySelector("#colorid");//console.log(selectColor);
let selectTextColor = document.querySelector("#textid");//console.log(selectTextColor);
let selectBrownBox = document.querySelector(".brown_color_box");//console.log(selectBrownBox);

selectColor.addEventListener('change', () =>{
    selectBrownBox.style.backgroundColor = selectColor.value;
});

selectTextColor.addEventListener('change', ()=>{
    selectBrownBox.style.color = selectTextColor.value;
});


//2. personal info
let selectPersonalName = document.querySelector("#names");//console.log(selectPersonalName);
let selectPersonalEmail = document.querySelector("#email_id");//console.log(selectPersonalEmail);
let selectPhoneNumber = document.querySelector("#phone_number");//console.log(selectPhoneNumber);
let selectCitys = document.querySelector("#citys"); //onsole.log(selectCitys);
let selectHeading1 = document.querySelector(".heading1");//console.log(selectHeading1);
let selectSkillPhone = document.querySelector(".personal_detail_phone_data");//console.log(selectSkillPhone);
let selectSkillEmail = document.querySelector(".personal_detail_email_data");//console.log(selectSkillEmail);
let selectSkillLocation = document.querySelector(".personal_detail_country_data");//console.log(selectSkillLocation);

// akhil sharma name code
selectPersonalName.addEventListener('input' , ()=>{
    selectHeading1.innerHTML = selectPersonalName.value;
});
// email id print code
selectPersonalEmail.addEventListener('input', ()=>{
    selectSkillEmail.innerHTML = selectPersonalEmail.value;
});
//phone num print code
selectPhoneNumber.addEventListener('input', ()=>{
    selectSkillPhone.innerHTML = selectPhoneNumber.value;
});
//location/country print code
selectCitys.addEventListener('input' , ()=> {
    selectSkillLocation.innerHTML = selectCitys.value;
});


//3.profeessional info
let selectProfessTitle = document.querySelector("#profess_title");//console.log(selectProfessTitle);
let selectProfessTextarea = document.querySelector(".profess_details_inputs");//console.log(selectProfessTextarea);
let selectProfessSkill = document.querySelector("#pro_skill");//console.log(selectProfessSkill);
let selectHeading3 = document.querySelector(".heading3");//console.log(selectHeading3);
let selectSummaryBelow = document.querySelector(".profeessional_textarea_data");//console.log(selectSummaryBelow);
let selectSkillBelow = document.querySelector(".profressional_form_skills_data");//console.log(selectSkillBelow);


// profess SDE code
selectProfessTitle.addEventListener('input', ()=>{
    selectHeading3.innerHTML = selectProfessTitle.value;
});

//profess textarea code
selectProfessTextarea.addEventListener('input', ()=>{
    selectSummaryBelow.innerHTML = selectProfessTextarea.value;
});
//profess skill code
selectProfessSkill.addEventListener('input', ()=>{
    selectSkillBelow.innerHTML = selectProfessSkill.value;
});
// selectProfessSkill.value.split(",").forEach(ele =>{
//         const p = document.createElement('p');
//         p.classList.add('p_tag');
//         p.innerText = `
//         <p style="color: white; background-color: black;">${ele}</p>`
//         selectSkillBelow.append(ele);
// });



/* add employment button start */
let selectAddEmployment = document.querySelector(".add_employee");//console.log(selectAddEmployment);
let selectAddEmploymentForm = document.querySelector(".add_employee_form");
let selectProfeeExperiSummary = document.querySelector(".profess_experience_summary");

selectAddEmployment.addEventListener('click',()=>{
        
    /* first div create */
    let createAddEmploymentDiv = document.createElement('div');
    createAddEmploymentDiv.innerHTML = `
        <label>Start</label>
        <input type="date" class="start_date_add_employee">
        <label>End</label>
        <input type="date" class="end_date_add_employee">
        <input type="text" id="job_title_employeement" placeholder="job Title">
        <input type="text" id="employer_employeement" placeholder="Employer">
        <textarea id="employment_description" cols="40" rows="8" placeholder="Description"></textarea>`
        selectAddEmploymentForm.append(createAddEmploymentDiv);

    /* second div create */
    let createprofeeExperiSummDiv = document.createElement('div');
    createprofeeExperiSummDiv.innerHTML = `
        <div class="flex_data">
            <ul>
                <li class="pasteText_job_title_employeement"></li>
            </ul> 
            <span>
                <span id="start_Date"></span>
                <span id="end_Date"></span>
            </span>
        </div><br>
        <label class="pasteText_employer"></label><br><br>
        <label class="pasteText_description_employeement"></label>`
        selectProfeeExperiSummary.append(createprofeeExperiSummDiv);

    /* pass values start */
    let selectStartDateOfAddEmployee = document.querySelectorAll(".start_date_add_employee");
    let selectEndDateOfAddEmployee = document.querySelectorAll(".end_date_add_employee");
    let selectJobTitleValueOfEmployee = document.querySelectorAll("#job_title_employeement");
    let selectEmployerOfEmployee = document.querySelectorAll("#employer_employeement");
    let selectEmployeeDescription = document.querySelectorAll("#employment_description");

    let selectStartDateOfProfessExperi = document.querySelectorAll("#start_Date");
    let selectEndDateOfProfessExperi = document.querySelectorAll("#end_Date");
    let selectSDEAtAmazon = document.querySelectorAll(".pasteText_job_title_employeement");//console.log(selectSDEAtAmazonValue);
    let selectSDE = document.querySelectorAll(".pasteText_employer");//console.log(selectSDE);
    let selectcanWritingAnything = document.querySelectorAll(".pasteText_description_employeement");//console.log(selectcanWritingAnything);


    selectStartDateOfAddEmployee.addEventListener('input', ()=>{
        selectStartDateOfProfessExperi.innerHTML = selectStartDateOfAddEmployee.value;
    });

    selectEndDateOfAddEmployee.addEventListener('input',()=>{
        selectEndDateOfProfessExperi.innerHTML = selectEndDateOfAddEmployee.value;
    });  
    selectJobTitleValueOfEmployee.addEventListener('input', ()=>{
        selectSDEAtAmazon.innerHTML = selectJobTitleValueOfEmployee.value;
    });
    selectEmployerOfEmployee.addEventListener('input', ()=>{
        selectSDE.innerHTML = selectEmployerOfEmployee.value;
    });
    selectEmployeeDescription.addEventListener('input', ()=>{
        selectcanWritingAnything.innerHTML = selectEmployeeDescription.value; 
    });
    
    
    
});
/* add employment button end */

/* add project button start */
let selectAddProject = document.querySelector(".add_project");//console.log(selectAddEmployment);
let selectAddProjectForm = document.querySelector(".add_project_form");

selectAddProject.addEventListener('click',()=>{
    let createAddProjectDiv = document.createElement('div');
    createAddProjectDiv.innerHTML = `
        <label>Start</label>
        <input type="date" class="start_date_add_project">
        <label>End</label>
        <input type="date" class="end_date_add_project">
        <input type="text" id="project_title" placeholder="Project Title">
        <textarea id="project_description" cols="40" rows="8" placeholder="Description"></textarea>`
        selectAddProjectForm.append(createAddProjectDiv);
});
/* add project button end */

/* add education button start */
let selectAddEducation = document.querySelector(".add_education");//console.log(selectAddEmployment);
let selectAddEducationForm = document.querySelector(".add_education_form");

selectAddEducation.addEventListener('click',()=>{
    let createAddEducationDiv = document.createElement('div');
    createAddEducationDiv.innerHTML = `
        <label>Start</label>
        <input type="date" class="start_date_add_education">
        <label>End</label>
        <input type="date" class="end_date_add_education">
        <input type="text" id="education_qualification" placeholder="Qualification">
        <input type="text" id="education_school" placeholder="School/College">
        <textarea id="education_description" cols="40" rows="8" placeholder=" Description"></textarea>`
        selectAddEducationForm.append(createAddEducationDiv);
});
/* add education button end */

