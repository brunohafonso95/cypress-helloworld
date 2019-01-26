Feature: pesquisa simples
    Scenario: pesquisar algo no google
        Given acesso a pagina do google
        When realizo uma pesquisa
        Then os resultados da pesquisa são retornados