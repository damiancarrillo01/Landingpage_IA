 // Mobile menu toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav ul').style.display = document.querySelector('nav ul').style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Simple testimonial slider
        let currentTestimonial = 0;
        const testimonials = [
            {
                quote: "Implementamos la solución de NeuroFactory en nuestra línea de envasado y redujimos los errores de calidad en un 85% en solo 3 meses.",
                author: "Juan Pérez",
                position: "Gerente de Producción, Alimentos Frescos S.A."
            },
            {
                quote: "La plataforma de monitoreo nos ha dado visibilidad completa de nuestras operaciones, permitiendo tomar decisiones basadas en datos.",
                author: "María González",
                position: "Directora de Operaciones, Farmacéutica Andina"
            },
            {
                quote: "El soporte técnico de NeuroFactory ha sido excepcional, con respuestas rápidas y soluciones efectivas a nuestros desafíos.",
                author: "Carlos Rojas",
                position: "Superintendente de Planta, Agroindustrial del Valle"
            }
        ];
        
        function updateTestimonial() {
            const testimonialElement = document.querySelector('.testimonial');
            testimonialElement.innerHTML = `
                <p>"${testimonials[currentTestimonial].quote}"</p>
                <div class="testimonial-author">${testimonials[currentTestimonial].author}</div>
                <div class="testimonial-position">${testimonials[currentTestimonial].position}</div>
            `;
            
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }
        
        // Change testimonial every 5 seconds
        setInterval(updateTestimonial, 5000);