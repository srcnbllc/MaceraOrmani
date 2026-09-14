import SwiftUI
import UIKit

// Compose Multiplatform UIViewController Köprüsü
struct ComposeView: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> UIViewController {
        let vc = UIViewController()
        vc.view.backgroundColor = UIColor(red: 0.05, green: 0.22, blue: 0.08, alpha: 1.0)
        
        let label = UILabel()
        label.text = "🌲 Kemerburgaz Kent Ormanı — Macera Ormanı 🦊"
        label.textColor = UIColor(red: 1.0, green: 0.7, blue: 0.0, alpha: 1.0)
        label.font = UIFont.boldSystemFont(ofSize: 18)
        label.textAlignment = .center
        label.translatesAutoresizingMaskIntoConstraints = false
        
        vc.view.addSubview(label)
        NSLayoutConstraint.activate([
            label.centerXAnchor.constraint(equalTo: vc.view.centerXAnchor),
            label.centerYAnchor.constraint(equalTo: vc.view.centerYAnchor)
        ])
        
        return vc
    }

    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {}
}

struct ContentView: View {
    var body: some View {
        ComposeView()
            .ignoresSafeArea(.all)
    }
}
