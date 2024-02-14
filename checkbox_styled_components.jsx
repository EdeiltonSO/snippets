import styled from 'styled-components';

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none; // permite a estilização do container
    position: absolute; // usado pelo ícone de checkmark
    width: 16px; // container
    height: 16px; // container

    border-radius: 50%;
    background-color: transparent;
    border: 2px solid #F00;

    &:checked {
        background-color: #00F;
        border: 2px solid #00F;

        // estilização do ícone
        &::after {
            // content: url(${icon}); // ícone com imagem
            content: ''; // com caractere (obrigatório mesmo vazio)
            // font-size: 12px; // estilização do texto no content
            // color: red;  // estilização do texto no content

            // posicionamento do ícone
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);

            // estilização do ícone
            width: 3px;
            height: 6px;
            border: solid #FFF;
            border-width: 0 2px 2px 0;
        }
    }
`;

// Estrutura
<label>
    <Checkbox checked />
    {/* texto opcional */}
</label>