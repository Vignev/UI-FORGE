import { ThemeProvider, useTheme, Button } from '@ui-forge/react';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="outline" onClick={toggleTheme} size="sm">
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
}

function ButtonShowcase() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 text-foreground">UI Forge</h1>
        <p className="text-muted-foreground">
          Cross-framework UI Component Library
        </p>
      </div>

      {/* Variants Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* States Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </div>
      </section>

      {/* Icons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            startIcon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            }
          >
            Next
          </Button>
          <Button
            variant="secondary"
            endIcon={
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            }
          >
            Back
          </Button>
        </div>
      </section>

      {/* Full Width Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Full Width</h2>
        <Button fullWidth>Full Width Button</Button>
        <Button variant="outline" fullWidth>
          Full Width Outline
        </Button>
      </section>

      {/* Interactive Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Interactive</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => alert('Clicked!')}>Click Me</Button>
          <Button
            variant="danger"
            onClick={() => {
              if (confirm('Are you sure?')) {
                alert('Confirmed!');
              }
            }}
          >
            Confirm Action
          </Button>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div />
            <ThemeToggle />
          </div>
          <ButtonShowcase />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
