import SwiftUI
import WebKit

// iOS Native WKWebView Container for Macera Ormanı
struct GameWebView: UIViewRepresentable {
    func makeUIView(context: Context) -> WKWebView {
        let preferences = WKWebpagePreferences()
        preferences.allowsContentJavaScript = true

        let configuration = WKWebViewConfiguration()
        configuration.defaultWebpagePreferences = preferences
        configuration.allowsInlineMediaPlayback = true
        configuration.mediaTypesRequiringUserActionForPlayback = []

        let contentController = WKUserContentController()
        contentController.add(context.coordinator, name: "gameBridge")
        configuration.userContentController = contentController

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 0.03, green: 0.08, blue: 0.05, alpha: 1.0)
        webView.scrollView.isScrollEnabled = false
        webView.scrollView.bounces = false

        if let indexURL = Bundle.main.url(forResource: "index", withExtension: "html") {
            webView.loadFileURL(indexURL, allowingReadAccessTo: Bundle.main.bundleURL)
        } else if let assetPath = Bundle.main.path(forResource: "index", ofType: "html") {
            let url = URL(fileURLWithPath: assetPath)
            webView.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
        }

        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}

    func makeCoordinator() -> Coordinator {
        Coordinator()
    }

    class Coordinator: NSObject, WKScriptMessageHandler {
        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            if message.name == "gameBridge" {
                let generator = UIImpactFeedbackGenerator(style: .medium)
                generator.impactOccurred()
            }
        }
    }
}

struct ContentView: View {
    var body: some View {
        GameWebView()
            .ignoresSafeArea(.all)
    }
}
