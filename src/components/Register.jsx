import { useState } from "react";
import { supabase } from "../createClient";

function Register() {

  const [user, setUser] = useState({
    name:'',
    email:'',
    password:''
  });

  function handleChange(event){
    setUser(prevFormData => {
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }

  async function createUser(){
    const {error} = await supabase
      .from('users')
      .insert({name: user.name, email: user.email, password: user.password})
  }

  console.log(user)
  return (
    <form onSubmit={createUser}
    className="h-[100vh] flex justify-center items-center bg-[#0f0f0f]">
      <div className="flex justify-center items-center flex-col size-max border-2 rounded-[4px] p-5">
        <h1 className="font-700 text-white">Faça seu Registro</h1>

        <div className="flex flex-col pt-[2rem] gap-[10px]">
          <label className="flex flex-col">
            <span className="text-white">Username</span>
            <input 
              type="text" 
              name="name" 
              placeholder="Primeiro nome" 
              onChange={handleChange}
              className="bg-transparent placeholder:pl-1 border-2 border-slate-400 rounded-[4px] hover:[outline-cyan-500]" />
          </label>
          <label className="flex flex-col">
          <span className="text-white">Email</span>
            <input 
            type="email" 
            name="email" 
            placeholder="Email"
            onChange={handleChange} 
            className="bg-transparent placeholder:pl-1 border-2 border-slate-400 rounded-[4px]" />
          </label>
          <label className="flex flex-col">
          <span className="text-white">Password</span>
            <input 
            type="password" 
            name="password" 
            placeholder="Senha"
            onChange={handleChange} 
            className="bg-transparent placeholder:pl-1 border-2 border-slate-400 rounded-[4px]" />
          </label>
          {/* <label className="flex flex-col">
          <span className="text-white">Confirm Password</span>
            <input 
            type="password" 
            name="confirmsenha" 
            placeholder="Confirme a sua senha" 
            className="bg-transparent placeholder:pl-1 border-2 border-slate-400 rounded-[4px]" />
          </label> */}
        </div>

        <div className="flex gap-2">
          <button 
          type="submit" 
          className="cursor-pointer border-[3px] border-[#545858] bg-[#545858] py-2 px-5 mt-[2rem] rounded-[4px] font-bold hover:bg-cyan-600 hover:border-cyan-600 transition-2" 
          >Registrar</button>
        </div>
      </div>
    </form>
  );
}

export default Register;
