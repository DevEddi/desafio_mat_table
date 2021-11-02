import {Component, OnInit, ViewChild} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {ConverteMoedasService} from "./converte-moedas.service";

interface Moeda {
  sigla: string;
  descricao: string;
}

@Component({
  selector: 'app-converte-moedas',
  templateUrl: './converte-moedas.component.html',
  styleUrls: ['./converte-moedas.component.css']
})
export class ConverteMoedasComponent implements OnInit {
        constructor(private formBuilder: FormBuilder,
        private ConverteMoedasService: ConverteMoedasService) { }

      // Controla exibição do mat-card que mostra o resultado
      exibirResultado: boolean = false;

      // Lista de moedas para serem exibidas no componente select (combobox)
      moedas: Moeda[] = []

      // Armazena as moedas selecionadas no componente Select
      moedaOrigemSelecionada: string = '';
      moedaDestinoSelecionada: string = '';
      valorSelecionado: number = 0;

      // Armazena os valores calculados
      valorConvertido: number = 0.0;
      taxaConversao: number = 0.0;

      ngOnInit(): void {
      this.ConverteMoedasService.listarSimbolos().subscribe(data => {
      for (let symbol in data.symbols) {
      let moeda: Moeda = {
      sigla: data.symbols[symbol].code,
      descricao: data.symbols[symbol].description
      };
      this.moedas.push(moeda);
      }
      })
      }

      calcularConversao() {
      this.ConverteMoedasService.converterMoeda(
        this.moedaOrigemSelecionada,
        this.moedaDestinoSelecionada,
        this.valorSelecionado
        ).subscribe(data => {
          this.valorConvertido = data.result;
          this.taxaConversao = data.info.rate
        });

      this.exibirResultado = true;
      }

      fecharResultado() {
      this.exibirResultado = false;
      }
}
