import { useForm } from "react-hook-form"
import './App.css'


function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();
 async function onSubmit(data){
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log(data)
  }
return (
 <form onSubmit={handleSubmit(onSubmit)}>
  <div className="firstname">
  <label >First Name : </label>
  <input type="text" className={errors.firstname? "input-err" : ""} {...register("firstname",{ required: true, maxLength:{value:8,message:"max length 8 allowed only"} ,minLength: {value: 3 ,message: 'min three char required'}})}  />
  {errors.firstname && <p className="error-msg" >{errors.firstname.message}</p>}
  </div>
 


 <div className="secondname">
  <label >Second Name : </label>
  <input className={errors.firstname? "input-err" : ""} type="text" {...register("secondname",{ required: true, maxLength:{value:6,message:"max length six allowed"},minLength:{value: 3, message : "min three char required"} })} />
  {errors.secondname && <p className="error-msg" >{errors.secondname.message}</p>}
  </div>
  <div className="lastname">
  <label >Last Name : </label>
  <input className={errors.firstname? "input-err" : ""} type="text" {...register("lastname",{ required: true, maxLength:{value:6,message:"max length six allowed"}, minLength:{value:3,message : 'min three char is required'} })} />
  {errors.lastname && <p className="error-msg" >{errors.lastname.message}</p> }
  </div>

  <input type="submit" disabled={isSubmitting}  />
 
 </form>
)
}

export default App
 






