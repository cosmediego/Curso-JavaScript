class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.validacaoCampos();
    }

    validacaoCampos(){
        let valid = true;
      
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco!!`)
                valid = false; 
            }

            if (campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false        
            }
        }
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            
        }

        return true;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterEnd', div);
    
    }

}

const valida = new ValidaFormulario();