customElements.define('page-home', class PageHome extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `

		<ion-menu side="start" content-id="main-content">
			<ion-header>
				<ion-toolbar translucent>
				<ion-title>Menu</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-content>
				<ion-list>
					<ion-item>
						<ion-icon name="mail" slot="start"></ion-icon>
						<ion-label>Inbox</ion-label>
					</ion-item>
					<ion-item>
						<ion-icon name="paper-plane" slot="start"></ion-icon>
						<ion-label>Outbox</ion-label>
					</ion-item>
					<ion-item>
						<ion-icon name="heart" slot="start"></ion-icon>
						<ion-label>Favorites</ion-label>
					</ion-item>
					<ion-item>
						<ion-icon name="archive" slot="start"></ion-icon>
						<ion-label>Archived</ion-label>
					</ion-item>
					<ion-item>
						<ion-icon name="trash" slot="start"></ion-icon>
						<ion-label>Trash</ion-label>
					</ion-item>
					<ion-item>
						<ion-icon name="warning" slot="start"></ion-icon>
						<ion-label>Spam</ion-label>
					</ion-item>
				</ion-list>
			</ion-content>
		</ion-menu>

	   	<div class="ion-page" id="main-content">

			<ion-header translucent>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-menu-button></ion-menu-button>
					</ion-buttons>
					<ion-title>Home</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-content fullscreen>
				<img src="https://picsum.photos/350" style="width:100%;" />

				<ion-button id="open-modal-button">Open modal</ion-button>

				<div class="ion-activatable ripple-parent">
					A plain div with a bounded ripple effect
					<ion-ripple-effect type="bounded"></ion-ripple-effect>
				</div>
			</ion-content>

		</div>
		`;

		customElements.define('modal-page', class extends HTMLElement {
			connectedCallback() {
				this.innerHTML = `
					<ion-header>
						<ion-toolbar>
							<ion-title>Modal Header</ion-title>
							<ion-buttons slot="primary">
								<ion-button id="dismiss-modal-button">
									<ion-icon slot="icon-only" name="close"></ion-icon>
								</ion-button>
							</ion-buttons>
						</ion-toolbar>
					</ion-header>
					<ion-content class="ion-padding">
						Modal Content
					</ion-content>
				`;
				
				document.getElementById('dismiss-modal-button').addEventListener('click', () => {
					document.querySelector('ion-modal').dismiss({
						'dismissed': true
					});
				})
			}
		});

		document.getElementById('open-modal-button').addEventListener('click', () => {			
			const modalElement = document.createElement('ion-modal');
			modalElement.component = 'modal-page';
		   
			// present the modal
			document.body.appendChild(modalElement);
			return modalElement.present();
		})

	}
});