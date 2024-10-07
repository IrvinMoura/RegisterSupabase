function Register(){
    return(
      <form className="h-[100vh] flex justify-center items-center">
        <div className="flex justify-center items-center flex-col size-max border-2 rounded-[4px] p-5">
            <h1 className="font-700">Faça seu Registro</h1>

            <div className="flex flex-col pt-[2rem] gap-[10px]">
                <input type="text" id="nome" placeholder="Primeiro nome" className="placeholder:pl-1 border-2 border-slate-400 rounded-[4px] hover:[outline-cyan-500]"/>
                <input type="text" id="sobrenome" placeholder="Sobrenome" className="placeholder:pl-1 border-2 border-slate-400 rounded-[4px]"/>
                <input type="email" id="email" placeholder="Email" className="placeholder:pl-1 border-2 border-slate-400 rounded-[4px]"/>
                <input type="password" id="senha" placeholder="Senha" className="placeholder:pl-1 border-2 border-slate-400 rounded-[4px]"/>
                <input type="password" id="confirmsenha" placeholder="Confirme a sua senha" className="placeholder:pl-1 border-2 border-slate-400 rounded-[4px]"/>
            </div>

            <div className="flex gap-2">
                <input type="submit" className="cursor-pointer border-[3px] border-[cyan] py-2 px-5 mt-[2rem] rounded-[4px] font-bold bg-[]" value="Registrar" />
            </div>
        </div>
      </form>  
    );
}

export default Register;
