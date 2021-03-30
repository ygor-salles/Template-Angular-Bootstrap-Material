import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessaoService } from 'src/app/services/sessao.service';
// import { ConfirmDialog } from 'src/app/utils/dialogs/confirm-dialog/confirm-dialog.component';
// import ROLES from 'src/app/utils/enums/Roles';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // ROLES = ROLES;

  constructor(
    private sessaoService: SessaoService,
    private dialog: MatDialog,
    private router: Router,
  ) { }

  // verificarPermissao(permissoes: ROLES[]): boolean {
  //   return this.sessaoService.checkRolePermission(permissoes);
  // }

  // logout(evento: MouseEvent): void {
  //   evento.preventDefault();

  //   const dialogRef = this.dialog.open(ConfirmDialog, {
  //     width: 'auto',
  //     height: 'auto',
  //     data: {
  //       title: 'Sair do sistema',
  //       text: `Você tem certeza de que deseja Sair?`,
  //     },
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.sessaoService.logout();
  //       this.router.navigate(['login']);
  //     }
  //   });
  // }

}
