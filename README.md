# Mercer Job Solutions - HR Strategy Copilot

A next-generation HR strategy copilot built to support CHROs and senior HR executives in workforce planning, job benchmarking, and compensation strategy.

## 🚀 Features

### Core Capabilities
- **Job Benchmarking** - Global, regional, and industry-specific compensation data with Mercer standards
- **Compensation Intelligence** - Real-time salary insights and market positioning analysis
- **Skills Gap Analysis** - Identify future workforce needs and reskilling opportunities
- **Job Description Generator** - Market-aligned, structured job descriptions ready for use
- **Workforce Planning** - Predictive insights on attrition risk and talent availability
- **Market Trends** - Industry insights and emerging role recommendations

### Key Features
- 📊 Interactive dashboards with real-time data visualization
- 🎯 Predictive analytics for workforce planning
- 📈 Market benchmarking with global coverage
- 🔍 Skills gap analysis and reskilling recommendations
- 📝 AI-powered job description generation
- 📱 Responsive design for all devices
- 🎨 Professional Mercer branding and design system

## 🛠️ Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Custom CSS with Mercer design system
- **Charts**: Recharts for data visualization
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mercer-job-solutions-poc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
mercer-job-solutions-poc/
├── public/
│   └── mercer-icon.svg
├── src/
│   ├── components/
│   │   ├── JobBenchmarking.jsx
│   │   ├── CompensationIntelligence.jsx
│   │   ├── SkillsGapAnalysis.jsx
│   │   ├── JobDescriptionGenerator.jsx
│   │   └── WorkforcePlanning.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage

### Job Benchmarking
- Search for specific roles by title, location, industry, and level
- View compensation benchmarks with percentile breakdowns
- Compare market data across different regions
- Export benchmark reports for further analysis

### Compensation Intelligence
- Monitor compensation trends over time
- Analyze market positioning and competitive landscape
- Assess compensation risk factors
- Get strategic recommendations for compensation strategy

### Skills Gap Analysis
- Identify critical skills gaps in your organization
- View recommended reskilling paths with ROI projections
- Track emerging skills and future workforce needs
- Monitor reskilling success rates and training investments

### Job Description Generator
- Create market-aligned job descriptions
- Use templates and best practices
- Save and manage job description library
- Export descriptions in multiple formats

### Workforce Planning
- Predict workforce growth and attrition trends
- Analyze attrition risk by role and department
- Assess talent availability across markets
- Plan scenarios for different business conditions

## 🎨 Design System

The application uses a custom design system based on Mercer's brand guidelines:

- **Primary Color**: Mercer Blue (#0066cc)
- **Typography**: Inter font family
- **Components**: Consistent card-based layout
- **Icons**: Lucide React icon set
- **Responsive**: Mobile-first design approach

## 📊 Sample Data

The POC includes realistic sample data for demonstration purposes:
- Compensation benchmarks for various roles and markets
- Skills gap analysis with current vs. required competencies
- Workforce trends and attrition predictions
- Market comparison data across regions

## 🔧 Customization

### Adding New Features
1. Create new components in the `src/components/` directory
2. Add navigation items in `App.jsx`
3. Implement routing and state management as needed

### Styling
- Modify `src/index.css` for global styles
- Use CSS custom properties for consistent theming
- Follow the established design system patterns

### Data Integration
- Replace sample data with real API calls
- Implement data fetching with React hooks
- Add error handling and loading states

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server to serve the built files

## 📈 Future Enhancements

- **Real-time Data Integration** - Connect to live compensation databases
- **AI-Powered Insights** - Implement machine learning for predictions
- **Advanced Analytics** - Add more sophisticated reporting capabilities
- **User Management** - Implement authentication and role-based access
- **API Integration** - Connect to HRIS and ATS systems
- **Mobile App** - Develop native mobile applications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation for common solutions

## 🏢 About Mercer

Mercer is a global consulting leader in talent, health, retirement, and investments. This POC demonstrates how Mercer's expertise can be delivered through modern digital platforms to support CHROs and senior HR executives in making data-driven workforce decisions.

---

**Built with ❤️ for the future of HR strategy**
