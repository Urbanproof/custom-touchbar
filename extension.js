const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const ping = vscode.commands.registerCommand('custom-touchbar.ping', () => {
		vscode.window.showInformationMessage('Pong');
	});

	const goTo = vscode.commands.registerCommand('custom-touchbar.goToDeclaration', () => {
		vscode.commands.executeCommand('editor.action.goToDeclaration');
	});

	const split = vscode.commands.registerCommand('custom-touchbar.goToDeclaration', () => {
		vscode.commands.executeCommand('workbench.action.splitEditor');
	});

	context.subscriptions.push(ping, goTo, split);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
