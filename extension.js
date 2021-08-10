const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	const ping = vscode.commands.registerCommand('customTouchbar.ping', () => {
		vscode.window.showInformationMessage('Pong');
	});

	const goTo = vscode.commands.registerCommand('customTouchbar.goToDeclaration', () => {
		vscode.commands.executeCommand('editor.action.goToDeclaration');
	});

	const split = vscode.commands.registerCommand('customTouchbar.splitEditor', () => {
		vscode.commands.executeCommand('workbench.action.splitEditor');
	});

	context.subscriptions.push(ping, goTo, split);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
