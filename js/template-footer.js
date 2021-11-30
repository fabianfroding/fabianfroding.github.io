const templateFooter = document.createElement('template');

templateFooter.innerHTML = `
    <footer class="copyright">
        <div class="up" id="up">
            <i class="fas fa-chevron-up"></i>
        </div>
        <p>&copy;
            ` + new Date().getFullYear() + ` Fabian F.
        </p>
    </footer>
`;

document.body.append(templateFooter.content);

// Original plain HTML backup.
/*
<footer class="copyright">
    <div class="up" id="up">
        <i class="fas fa-chevron-up"></i>
    </div>
    <p>&copy;
        <script>document.write(new Date().getFullYear())</script> Fabian F.
    </p>
</footer>
*/